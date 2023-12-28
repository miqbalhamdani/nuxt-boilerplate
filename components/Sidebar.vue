<template>
  <div>
    <div class="custom-sidebar-container">
      <div class="logo-container">
        <img src="~/assets/images/logo-koltitrace-mis.svg" class="img-logo" />
      </div>
      <label>survey</label>
      <ul>
        <li v-for="(i, index) in dataSurvey" :key="index">
          <div
            class="list-menu"
            @mouseenter="showSecondSidebar"
            @mouseleave="hideSecondSidebar"
          >
            <!-- <img :src="i.images" alt="" /> -->
            <img :src="i.images" alt="" />
            <span class="font-size-14 font-weight-500">{{ i.name }}</span>
            <IconChevronRight />
          </div>
        </li>
      </ul>
      <hr class="divider" />
      <label>coaching & training</label>
      <ul>
        <li v-for="(i, index) in dataCoachingTraining" :key="index">
          <div
            class="list-menu"
            @mouseenter="showSecondSidebar"
            @mouseleave="hideSecondSidebar"
          >
            <img :src="i.images" alt="" />
            <span class="font-size-14 font-weight-500">{{ i.name }}</span>
            <IconChevronRight />
          </div>
        </li>
      </ul>
      <hr class="divider" />
      <label>traceability</label>
      <ul>
        <li v-for="(i, index) in dataTraceability" :key="index">
          <div
            class="list-menu"
            @mouseenter="showSecondSidebar"
            @mouseleave="hideSecondSidebar"
          >
            <img :src="i.images" alt="" />
            <span class="font-size-14 font-weight-500">{{ i.name }}</span>
            <IconChevronRight />
          </div>
        </li>
      </ul>
      <hr class="divider-end" />
      <div class="sidebar-bottom">
        <IconArrowNarrowUp />
        <p>You have reached the end of the side menu</p>
      </div>
    </div>
    <div
      class="custom-second-sidebar"
      @mouseenter="showSecondSidebar"
      @mouseleave="hideSecondSidebar"
    >
      <div class="mb-20">
        <div class="custom-second-sidebar-title">Dashboard</div>
        <label class="custom-second-sidebar-subtitle">Survey:</label>
        <div class="custom-second-sidebar-list active">
          <p>Family and Labor</p>

          <IconInfoCircle
            v-tippy="{
              content: 'Lorem ipsum dolor sit amet consectetur ',
              arrow: true,
              placement: 'right',
              theme: 'customTheme',
            }"
          />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Land Use Change GHG Emissions</p>
          <IconInfoCircle
            v-tippy="{
              content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit',
              arrow: true,
              placement: 'right',
              theme: 'customTheme',
            }"
          />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Program KPI (General)</p>
          <IconInfoCircle
            v-tippy="{
              trigger: 'click',
              content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
              arrow: true,
              placement: 'right',
              theme: 'customTheme',
            }"
          />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Plot Basic</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Producer Demographic</p>
          <IconInfoCircle />
        </div>
        <label class="custom-second-sidebar-subtitle">Training:</label>
        <div class="custom-second-sidebar-list">
          <p>Producer Training and Coaching</p>
          <IconInfoCircle />
        </div>
        <label class="custom-second-sidebar-subtitle">Seed to Table:</label>
        <div class="custom-second-sidebar-list">
          <p>Seed to Table Traceability</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Traceability</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Transaction Stock</p>
          <IconInfoCircle />
        </div>
      </div>
      <div class="mb-20">
        <div class="custom-second-sidebar-title">Report</div>
        <div class="custom-second-sidebar-list">
          <p>Data User Sync</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Log Activity User</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Producer Transaction</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Standard Report</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Traceability Transaction</p>
          <IconInfoCircle />
        </div>
        <div class="custom-second-sidebar-list">
          <p>Survey</p>
          <IconInfoCircle />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  IconChevronRight,
  IconArrowNarrowUp,
  IconInfoCircle,
} from "@tabler/icons-vue";
import IconDashboardReport from "@/assets/icon/pie-chart.svg";
import IconMap from "@/assets/icon/maps.svg";
import IconProducers from "@/assets/icon/producer.svg";
import IconBusiness from "@/assets/icon/business.svg";
import IconGroup from "@/assets/icon/group.svg";
import IconAgronomist from "@/assets/icon/agronomist.svg";
import IconAssessment from "@/assets/icon/assessment.svg";
import "tippy.js/dist/tippy.css";
const showSecondSidebar = () => {
  const secondSidebar = document.querySelector(".custom-second-sidebar");
  if (secondSidebar) {
    secondSidebar.style.display = "block";
  }
};
const hideSecondSidebar = () => {
  const secondSidebar = document.querySelector(".custom-second-sidebar");
  if (secondSidebar) {
    secondSidebar.style.display = "none";
  }
};
const dataSurvey = [
  {
    name: "Dashboard & Report",
    images: IconDashboardReport,
  },
  {
    name: "Map",
    images: IconMap,
  },
  {
    name: "Producers",
    images: IconProducers,
  },
  {
    name: "Business",
    images: IconBusiness,
  },
  {
    name: "Group",
    images: IconGroup,
  },
  {
    name: "Agronomist",
    images: IconAgronomist,
  },
  {
    name: "Assessment",
    images: IconAssessment,
  },
];
const dataCoachingTraining = [
  {
    name: "Action Plan",
    images: IconDashboardReport,
  },
  {
    name: "Training & Coahing",
    images: IconMap,
  },
  {
    name: "Interactions",
    images: IconProducers,
  },
];
const dataTraceability = [
  {
    name: "Traceability",
    images: IconDashboardReport,
  },
  {
    name: "Traceability Reference",
    images: IconMap,
  },
  {
    name: "Traceability Import Data",
    images: IconProducers,
  },
  {
    name: "Business",
    images: IconBusiness,
  },
  {
    name: "Warehouse",
    images: IconGroup,
  },
];
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_variables";
.custom-sidebar-container {
  width: 240px;
  height: 100%;
  position: fixed;
  padding: 0 0 30px 0;
  float: left;
  background-color: $color-black-80;
  color: rgba($color: $color-white, $alpha: 0.5);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  .logo-container {
    display: flex;
    align-items: center;
    height: 90px;
    padding: 0 20px;
    // padding: 38px 20px 28px 20px;
    position: sticky;
    top: 0;
    background: $color-black-80;
    z-index: 1;
    .img-logo {
      height: 50px;
    }
  }

  label {
    font-size: 12px;
    color: rgba($color: $color-white, $alpha: 0.3);
    font-weight: 600;
    padding: 0 20px;
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  ul {
    padding-left: 0;
    margin-bottom: 0;

    li {
      list-style: none;
    }
  }

  .list-menu {
    position: relative;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      word-break: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      width: 100%;
      font-size: 14px;
      font-weight: 500;
    }

    img {
      filter: invert(50%);
    }

    &:hover {
      background: $color-black-hover;
      color: $color-white;
      svg g {
        opacity: 1;
      }
      img {
        filter: brightness(0) invert(1) !important;
      }
    }
    .tabler-icon-chevron-right {
      min-width: 16px;
      max-width: 16px;
      min-height: 16px;
      max-height: 16px;
    }
  }
  .sidebar-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    row-gap: 10px;
    svg {
      min-width: 24px;
    }
    p {
      font-size: 14px;
      font-weight: 500;
      color: rgba($color: $color-white, $alpha: 0.5);
      text-align: center;
    }
  }
}

/* second sidebar */
.custom-second-sidebar {
  width: 262px;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 240px;
  padding: 30px 0;
  float: left;
  background-color: $color-black-hover;
  box-shadow: 0px 40px 60px 0px rgba($color: $color-black-100, $alpha: 0.08);
  color: rgba($color: $color-white, $alpha: 0.5);
  z-index: 999;
  // display: none;
  overflow-y: auto;

  .custom-second-sidebar-title {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 10px 14px;
    padding-bottom: 10px;
    color: $color-white;
    border-bottom: 1px solid rgba($color: $color-white, $alpha: 0.2);
    overflow: hidden;
  }

  .custom-second-sidebar-subtitle {
    text-transform: capitalize;
    color: rgba($color: $color-white, $alpha: 0.3);
    font-size: 14px;
    font-weight: 500;
    margin: 10px 14px 6px;
    ~ .custom-second-sidebar-list {
      padding: 10px 14px 10px 36px;
    }
  }

  .custom-second-sidebar-list {
    margin-bottom: 4px;
    padding: 10px 14px 10px 14px;
    color: rgba($color: $color-white, $alpha: 0.5);
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 8px;
    p {
      margin-bottom: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box !important;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      white-space: normal;
    }
    .tabler-icon {
      min-width: 16px;
      min-height: 16px;
      max-width: 16px;
      max-height: 16px;
    }
    &:hover {
      background-color: $color-black-80;
      cursor: pointer;
    }
  }
}
</style>
