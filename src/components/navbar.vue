<script>
import Language from "./language"
/**
 * Navbar component
 */
export default {
  data() {
    return {
      isCondensed: false,
      windowWidth: window.innerWidth
    }
  },

  components: {
    Language
  },
  props: {
    isWhiteNavbar: {
      type: Boolean
    },
    navLight: {
      type: Boolean
    },
    isIcons: {
      type: Boolean
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize)
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth
    })
    window.onscroll = function () {
      onwindowScroll()
    }

    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("topnav").classList.add("nav-sticky")
      } else {
        document.getElementById("topnav").classList.remove("nav-sticky")
      }

      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("back-to-top").style.display = "inline"
      } else {
        document.getElementById("back-to-top").style.display = "none"
      }
    }

    var links = document.getElementsByClassName("side-nav-link-ref")
    var matchingMenuItem = null
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i]
        break
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active")
      var parent = matchingMenuItem.parentElement

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active")
        const parent2 = parent.parentElement
        if (parent2) {
          parent2.classList.add("active")
          const parent3 = parent2.parentElement
          if (parent3) {
            parent3.classList.add("active")
            const parent4 = parent3.parentElement
            if (parent4) {
              const parent5 = parent4.parentElement
              parent5.classList.add("active")
            }
          }
        }
      }
    }
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    },
    /**
     * Toggle menu
     */
    toggleMenu() {
      this.isCondensed = !this.isCondensed
      if (this.isCondensed) {
        document.getElementById("navigation").style.display = "block"
      } else document.getElementById("navigation").style.display = "none"
    },

    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
      event.preventDefault()
      console.log("event.target:", event.target)
      const nextEl = event.target.nextSibling.nextSibling

      if (nextEl && !nextEl.classList.contains("open")) {
        const parentEl = event.target.parentNode
        if (parentEl) {
          parentEl.classList.remove("open")
        }
        nextEl.classList.add("open")
      } else if (nextEl) {
        nextEl.classList.remove("open")
      }
      return false
    }
  }
}
</script>

<template>
  <div>
    <!-- Navbar STart -->
    <header
      id="topnav"
      class="defaultscroll sticky"
      :class="{ 'bg-white': isWhiteNavbar === true }"
    >
      <div class="container">
        <!-- Logo container-->
        <div>
          <router-link class="logo" to="/" v-if="navLight !== true">
            <img src="images/logo-dark.png" height="72" alt="" />
          </router-link>
          <router-link class="logo" to="/" v-else>
            <img src="images/logo-dark.png" class="l-dark" height="72" alt="" />
            <img
              src="images/logo-dark.png"
              class="l-light"
              height="72"
              alt=""
            />
          </router-link>
        </div>
        <div class="buy-button ml-0 mt-0" v-if="isIcons !== true">
          <a href="https://app.seedao.xyz" class="btn enterApp">
            <img src="images/Vector.svg" class="mr-2" />{{ $t("Enter-App") }}</a
          >
        </div>
        <div class="buy-button mt-1 mr-3" v-if="isIcons !== true">
          <Language />
        </div>
        <ul class="buy-button list-inline mb-0" v-if="isIcons === true">
          <li class="list-inline-item mb-0 developer-icon">
            <b-dropdown
              right
              variant="link"
              toggle-class="text-decoration-none p-0 pr-2"
              menu-class="dd-menu dropdown-menu-right bg-white shadow rounded border-0 mt-3 py-0"
            >
              <template #button-content>
                <i class="mdi mdi-magnify h4 text-muted"></i>
              </template>
              <div style="width: 300px">
                <form>
                  <input
                    type="text"
                    id="text"
                    name="name"
                    class="form-control border bg-white"
                    placeholder="Search..."
                  />
                </form>
              </div>
            </b-dropdown>
          </li>
          <li class="list-inline-item mb-0 pr-2">
            <a href="#" class="btn btn-icon btn-soft-primary"
              ><i class="mdi mdi-github mdi-18px icons"></i
            ></a>
          </li>
          <li class="list-inline-item mb-0 pr-2">
            <a href="#" class="btn btn-icon btn-soft-primary"
              ><i class="mdi mdi-stack-overflow mdi-18px icons"></i
            ></a>
          </li>
          <li class="list-inline-item mb-0">
            <a
              href="#"
              class="btn btn-icon btn-soft-primary"
              data-toggle="modal"
              data-target="#productview"
              ><i class="mdi mdi-account-outline mdi-18px icons"></i
            ></a>
          </li>
        </ul>
        <!--end login button-->
        <!--end login button-->
        <!-- End Logo container-->
        <div class="menu-extras">
          <div class="menu-item">
            <!-- Mobile menu toggle-->
            <a
              class="navbar-toggle"
              @click="toggleMenu()"
              :class="{ open: isCondensed === true }"
            >
              <div class="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            <!-- End mobile menu toggle-->
          </div>
        </div>

        <div id="navigation">
          <!-- Navigation Menu-->
          <ul
            class="navigation-menu"
            :class="{ 'nav-light': navLight === true }"
          >
            <!-- <li>
              <router-link to="/" class="side-nav-link-ref"
                ><h5>{{ $t("Home") }}</h5></router-link
              >
            </li> -->
            <li class="has-submenu">
              <router-link to="/intro" v-if="windowWidth >= 991"
                ><h5>{{ $t("Intro") }}</h5></router-link
              >
              <router-link to="/intro" v-else>{{ $t("Intro") }}</router-link>
            </li>
            <li class="has-submenu">
                <router-link to="/journey" v-if="windowWidth >= 991"
                  ><h5>{{ $t("Journey") }}</h5></router-link
                >
                <router-link to="/journey" v-else>{{ $t("Journey") }}</router-link>
            </li>
            <li class="has-submenu">
                <router-link to="/build" v-if="windowWidth >= 991"
                  ><h5>{{ $t("Build") }}</h5></router-link
                >
                <router-link to="/build" v-else>{{ $t("Build") }}</router-link>
            </li>
          </ul>
          <!--end navigation menu-->
          <div class="buy-menu-btn text-center" v-if="windowWidth < 781">
            <hr/>
            <Language />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://app.seedao.xyz" class="btn enterApp">
              <img src="images/Vector.svg" class="mr-2" />{{
                $t("Enter-App")
              }}</a
            ><br/>&nbsp;
          </div>
          <div class="buy-menu-btn d-none"></div>
          <!--end login button-->
        </div>
        <!--end navigation-->
      </div>
      <!--end container-->
    </header>
    <!--end header-->
    <!-- Navbar End -->
  </div>
</template>

<style scoped>
.enterApp {
  background: #000000;
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #03ffa4;
}
.has-submenu h5 {
  color: #000000;
}
#topnav .navbar-toggle {
  border: 0;
  position: relative;
  width: 50px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  height: 50px;
}
#topnav .navbar-toggle span {
  height: 2px;
  width: 100%;
  background-color: #03ffa4;
  display: block;
  margin-bottom: 5px;
  -webkit-transition: -webkit-transform 0.5s ease;
  transition: -webkit-transform 0.5s ease;
  transition: transform 0.5s ease;
  transition: transform 0.5s ease, -webkit-transform 0.5s ease;
}
#topnav .menu-extras {
  padding-right: 10px;
}

#topnav .navbar-toggle .lines {
  width: 25px;
  display: block;
  position: relative;
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 14px;
  height: 18px;
  top: 18px;
}

@media (max-width: 780px) {
  #topnav .buy-button {
    display: none;
  }
}
@media (max-width: 991px) {
  #topnav {
    background-color: #ffffff00;
    -webkit-box-shadow: 0 0 0px rgba(60, 72, 88, 0.15);
    box-shadow: 0 0 0px rgba(60, 72, 88, 0.15);
  }
  #topnav .menu-extras .menu-item {
    width: 50px;
    border-radius: 4px;
    background-color: #000000;
    height: 50px;
  }
}
</style>
