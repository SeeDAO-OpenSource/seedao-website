<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="row">
    <div class="col-md-4 col-12 mt-4 pt-2">
      <div
        class="card pricing-rates business-rate shadow bg-light rounded text-center border-0 h-100"
        style="border: 1px solid rgba(166, 166, 166, 1) !important"
      >
        <div class="card-body py-5 d-flex flex-column justify-content-between">
          <div>
            <h3 class="title font-weight-bold text-uppercase text-primary mb-4">
              {{ $t("P1-Proposal") }}
            </h3>
            <div class="d-flex justify-content-center mb-4">
              <span class="price h3 mb-0">{{ $t("Max") }} 20k&nbsp;$SCR</span>
            </div>
          </div>
          <div>
            <ul class="list-unstyled mb-0 pl-0 text-left">
              <li class="h6 text-muted mb-0">
                <span class="text-primary h5 mr-2">1. </span
                >{{ $t("P1-Proposal-Details-1") }}
              </li>
              <li class="h6 text-muted mb-0">
                <span class="text-primary h5 mr-2">2. </span
                >{{ $t("P1-Proposal-Details-2") }}
              </li>
              <li class="h6 text-muted mb-0">
                <span class="text-primary h5 mr-2">3. </span
                >{{ $t("P1-Proposal-Details-3") }}
              </li>
              <li class="h6 text-muted mb-0">
                <span class="text-primary h5 mr-2">4. </span
                >{{ $t("P1-Proposal-Details-4") }}
              </li>
            </ul>
            <div class="d-flex justify-content-center mb-4 mt-4">
              <span class="price h5 mb-0"
                ><b
                  >{{ $t("Create-Proposal-Requirement") }}:
                  {{ $t("Contributor-Level") }} L1 +</b
                ></span
              >
            </div>
            <a
              href="https://forum.seedao.xyz/category/14?filter=category"
              target="_blank"
              class="btn mt-4"
              style="
                border-radius: 5px;
                background: #000000;
                font-style: normal;
                font-weight: 600;
                font-size: 20px;
                line-height: 24px;
                color: #03ffa4;
              "
              >{{ $t("More-Proposals") }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-12 mt-4 pt-2">
      <div
        class="card pricing-rates business-rate shadow bg-light rounded text-center border-0 h-100"
        style="border: 1px solid rgba(166, 166, 166, 1) !important"
      >
        <div class="card-body py-5 d-flex flex-column justify-content-between">
          <div>
            <h3 class="title font-weight-bold text-uppercase text-primary mb-4">
              {{ $t("P2-Proposal") }}
            </h3>
            <div class="d-flex justify-content-center">
              <span class="price h3 mb-0">{{ $t("Max") }} 50k&nbsp;$SCR</span>
            </div>
            <div class="d-flex justify-content-center mb-4">
              <span class="price h3 mb-0">{{ $t("Max") }} 1,000&nbsp;U</span>
            </div>
          </div>

          <div>
            <ul class="list-unstyled mb-0 pl-0 text-left">
              <li class="h6 text-muted mb-0">
                <span class="text-primary h5 mr-2">1. </span
                >{{ $t("P2-Proposal-Details-1") }}
              </li>
              <li class="h6 text-muted mb-0">
                <span class="text-primary h5 mr-2">2. </span
                >{{ $t("P2-Proposal-Details-2") }}
              </li>
              <li class="h6 text-muted mb-0">
                <span class="text-primary h5 mr-2">3. </span
                >{{ $t("P2-Proposal-Details-3") }}
              </li>
              <li class="h6 text-muted mb-0">
                <span class="text-primary h5 mr-2">4. </span
                >{{ $t("P2-Proposal-Details-4") }}
              </li>
            </ul>
            <div class="d-flex justify-content-center mb-4 mt-4">
              <span class="price h5 mb-0"
                ><b
                  >{{ $t("Create-Proposal-Requirement") }}:
                  {{ $t("Contributor-Level") }} L2 +</b
                ></span
              >
            </div>
            <a
              href="https://forum.seedao.xyz/category/9?filter=category"
              target="_blank"
              class="btn mt-4"
              style="
                border-radius: 5px;
                background: #000000;
                font-style: normal;
                font-weight: 600;
                font-size: 20px;
                line-height: 24px;
                color: #03ffa4;
              "
              >{{ $t("More-Proposals") }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-12 mt-4 pt-2">
      <div
        class="card pricing-rates business-rate shadow bg-light rounded text-center border-0"
        style="border: 1px solid rgba(166, 166, 166, 1) !important"
      >
        <div class="card-body py-5">
          <h3 class="title font-weight-bold text-uppercase text-primary mb-4">
            {{ $t("P3-Proposal") }}
          </h3>
          <div class="d-flex justify-content-center">
            <span class="price h3 mb-0"
              >{{ $t("Within-Budget") }}&nbsp;$SCR</span
            >
          </div>
          <div class="d-flex justify-content-center mb-4">
            <span class="price h3 mb-0">{{ $t("Max") }} 100,000&nbsp;U</span>
          </div>
          <!-- <div class="d-flex justify-content-center">
            <span class="price mb-0">{{$t("Published")}} 30 {{ $t("a-proposals") }}</span>
          </div>
          <div class="d-flex justify-content-center mb-4">
            <span class="price mb-0">{{$t("Paid")}} 2,000k $SCR</span>
          </div> -->

          <ul class="list-unstyled mb-0 pl-0 text-left">
            <li class="h6 text-muted mb-0">
              <span class="text-primary h5 mr-2">1. </span
              >{{ $t("P3-Proposal-Details-1") }}
            </li>
            <li class="h6 text-muted mb-0">
              <span class="text-primary h5 mr-2">2. </span
              >{{ $t("P3-Proposal-Details-2") }}
            </li>
            <li class="h6 text-muted mb-0">
              <span class="text-primary h5 mr-2">3. </span
              >{{ $t("P3-Proposal-Details-3") }}
            </li>
            <li class="h6 text-muted mb-0">
              <span class="text-primary h5 mr-2">4. </span
              >{{ $t("P3-Proposal-Details-4") }}
            </li>
          </ul>
          <div class="d-flex justify-content-center mb-4 mt-4">
            <span class="price h5 mb-0"
              ><b
                >{{ $t("Create-Proposal-Requirement") }}:
                {{ $t("Contributor-Level") }} L3 +</b
              ></span
            >
          </div>
          <a
            href="https://forum.seedao.xyz/category/12?filter=category"
            target="_blank"
            class="btn mt-4"
            style="
              border-radius: 5px;
              background: #000000;
              font-style: normal;
              font-weight: 600;
              font-size: 20px;
              line-height: 24px;
              color: #03ffa4;
            "
            >{{ $t("More-Proposals") }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
