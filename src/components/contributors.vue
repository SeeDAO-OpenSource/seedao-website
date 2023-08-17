<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="row">
    <div class="col-md-4 col-12">
      <div class="features text-center">
        <img src="images/i1.svg" />

        <div class="content mt-4">
          <h5>{{ $t("Contributor-Levels") }}</h5>
          <p class="text-muted mb-0 text-center">
            {{ $t("Contributor-Levels-Details") }}
          </p>
          <!-- <ul class="list-unstyled text-muted text-center">
            <li class="mb-0">
              <span class="text-primary h5 mr-2"></span
              ><b>SeeDAO {{ $t("Newbie") }} : </b> 0 - 5000
            </li>
            <li class="mb-0">
              <span class="text-primary h5 mr-2"></span
              ><b>L1 {{ $t("Contributor") }} : </b> 5000 - 20k
            </li>
            <li class="mb-0">
              <span class="text-primary h5 mr-2"></span
              ><b>L2 {{ $t("Contributor") }} : </b> 20k - 100k
            </li>
            <li class="mb-0">
              <span class="text-primary h5 mr-2"></span
              ><b>L3 {{ $t("Contributor") }} : </b> 100k - 300k
            </li>
            <li class="mb-0">
              <span class="text-primary h5 mr-2"></span
              ><b>L4 {{ $t("Contributor") }} : </b> 300k - 1m
            </li>
            <li class="mb-0">
              <span class="text-primary h5 mr-2"></span
              ><b>L5 {{ $t("Contributor") }} : </b> 1m+
            </li>
          </ul> -->
        </div>
      </div>
    </div>

    <div class="col-md-4 col-12">
      <div class="features text-center">
        <img src="images/i2.svg" />

        <div class="content mt-4">
          <h5>{{ $t("SGN") }}</h5>
          <p class="text-muted mb-0 text-center">
            {{ $t("SGN-Details-1") }} <b>{{ $t("SGN-Application") }}</b>
            {{ $t("SGN-Details-2") }}
          </p>
        </div>
      </div>
    </div>

    <div class="col-md-4 col-12">
      <div class="features text-center">
        <img src="images/i3.svg" />

        <div class="content mt-4">
          <h5>{{ $t("Node") }}</h5>
          <p class="text-muted mb-0 text-center">
            {{ $t("Node-Details") }}
          </p>
        </div>
      </div>
    </div>

    <!--end col-->
  </div>
</template>
