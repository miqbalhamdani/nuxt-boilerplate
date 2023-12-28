<template>
  <div class="custom-header">
    <div class="custom-navbar-left">
      <span>Program KPI (General)</span>
      <span>Program KPI (General)</span>
    </div>
    <div class="custom-navbar-right">
      <!-- <span class="navbar-group" @click="openGroup()">
        <IconUsers />
        <div class="dropdown-group">
          <div class="head">Group Account</div>
          <div class="body">
            <div
              v-for="(i, index) in dataGroupAccount"
              :key="index"
              class="list-group"
            >
              <span class="left">
                <IconUsers />
                <span>
                  <p>{{ i.title }}</p>
                  <p>{{ i.desc }}</p>
                </span>
              </span>
              <span class="right">
                <input type="radio" name="radio-group" />
              </span>
            </div>
          </div>
        </div>
      </span> -->
      <span class="navbar-notification" @click="openNotification()">
        <IconBell />
        <!-- <span class="has-notif"></span> -->

        <div class="dropdown-notification">
          <div class="head">
            <span>Notification</span>
            <span>Mark all as read</span>
          </div>
          <div class="body">
            <div class="list-notification-nodata">
              <client-only>
                <Vue3Lottie
                  :animationData="NotificationJSON"
                  :height="120"
                  :width="120"
                />
              </client-only>
              <p>You don't have any notifications</p>
              <p>Please check back later.</p>
            </div>
            <div class="list-notification-data">
              <IconBell />
              <div class="notif-text">
                <p>Koltiva Event <span class="notif"></span></p>
                <p>Subject - Lorem ipsum dolor sit amet.</p>
                <p>Just Now</p>
              </div>
            </div>
            <div class="list-notification-data readed">
              <IconBell />
              <div class="notif-text">
                <p>Koltiva Event</p>
                <p>Subject - Lorem ipsum dolor sit amet.</p>
                <p>1 hour ago</p>
              </div>
            </div>
          </div>
          <div class="footer">View all notifications</div>
        </div>
      </span>
      <span class="navbar-user" @click="openUser()">
        <span>
          <p class="text-name">User Name</p>
          <p class="text-group">User group name</p>
        </span>
        <img src="~/assets/images/user1.png" alt="emptyPhoto" />
        <IconChevronDown />

        <div class="dropdown-user">
          <div class="list">
            <a href="#" class="link-text">
              <IconUser />
              <span>My Profile</span>
            </a>
          </div>
          <div class="list" @mouseenter="openGroup" @mouseleave="closeGroup">
            <a href="#" class="link-text">
              <IconUserCode />
              <span>User group</span>
              <IconChevronRight />
            </a>
            <div class="dropdown-group">
              <div class="head">
                <p>Group Account</p>
                <a href="#" class="view-all">View All</a>
              </div>
              <div class="body">
                <div
                  v-for="(i, index) in dataGroupAccount"
                  :key="index"
                  class="list-group"
                >
                  <span class="left">
                    <IconUsers />
                    <span>
                      <p>{{ i.title }}</p>
                      <p>{{ i.desc }}</p>
                    </span>
                  </span>
                  <span class="right">
                    <input type="radio" name="radio-group" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="list">
            <a href="#" class="link-text">
              <IconFileText />
              <span>Privacy policy</span>
            </a>
          </div>
          <div class="list">
            <a href="#" class="link-text">
              <IconFile />
              <span>Terms of use</span>
            </a>
          </div>
          <div class="list">
            <a href="#" class="link-text">
              <IconMessage />
              <span>Feedback</span>
            </a>
          </div>
          <div class="list">
            <a href="#" class="link-text">
              <IconSettings />
              <span>Settings</span>
            </a>
          </div>
          <hr
            style="
              border: 1px solid #e7e7e7;
              width: 100%;
              margin-top: 0;
              margin-bottom: 0;
            "
          />
          <div class="list-user-logout">
            <a href="#" class="link-text">
              <IconLogout />
              <span>Logout</span>
            </a>
          </div>
        </div>
      </span>
      <span class="navbar-switch-app" @click="openSwitchApp()">
        <p class="show-title">MIS Koltitrace</p>
        <img
          src="~/assets/images/user-koltitrace.svg"
          alt="MIS Koltitrace"
          class="img-product"
        />
        <IconChevronDown />

        <div class="dropdown-switch-app">
          <div class="head">
            <p>Switch to</p>
          </div>
          <div class="body">
            <div class="list">
              <img src="~/assets/images/mis-farmgate.svg" alt="MIS Farmgate" />
              <span>
                <p class="title">MIS Farmgate</p>
                <p class="subTitle">Trading and goods processing</p>
              </span>
              <IconCheck />
            </div>
            <div class="list">
              <img
                src="~/assets/images/mis-farmxtension.svg"
                alt="MIS FarmXtention"
              />
              <span>
                <p class="title">MIS FarmXtention</p>
                <p class="subTitle">Data collecting and coaching</p>
              </span>
            </div>
            <div class="list">
              <img
                src="~/assets/images/mis-farmretail.svg"
                alt="MIS FarmRetail"
              />
              <span>
                <p class="title">MIS FarmRetail</p>
                <p class="subTitle">POS, retail and inventory</p>
              </span>
            </div>
            <div class="list">
              <img src="~/assets/images/mis-loan.svg" alt="MIS Loan" />
              <span>
                <p class="title">MIS Loan</p>
                <p class="subTitle">Loan and repayment</p>
              </span>
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script setup>
import {
  IconUsers,
  IconBell,
  IconChevronDown,
  IconChevronRight,
  IconUserCode,
  IconFileText,
  IconFile,
  IconMessage,
  IconUser,
  IconSettings,
  IconLogout,
  IconCheck,
} from "@tabler/icons-vue";

import { Vue3Lottie } from "vue3-lottie";
import NotificationJSON from "@/assets/icon/notification.json";

const dataGroupAccount = [
  {
    title: "Group name goes here",
    desc: "Partner name",
  },
  {
    title: "Group name goes here",
    desc: "Partner name",
  },
  {
    title: "Group name goes here",
    desc: "Partner name",
  },
  {
    title: "Group name goes here",
    desc: "Partner name",
  },
  {
    title: "Group name goes here",
    desc: "Partner name",
  },
  {
    title: "Group name goes here",
    desc: "Partner name",
  },
];
const openGroup = () => {
  const secondGroup = document.querySelector(".dropdown-group");
  if (secondGroup) {
    secondGroup.style.display = "block";
  }
};
const closeGroup = () => {
  const secondGroup = document.querySelector(".dropdown-group");
  if (secondGroup) {
    secondGroup.style.display = "none";
  }
};
const openNotification = () => {
  var dropdownNotification = document.querySelector(".dropdown-notification");
  if (dropdownNotification.style.display === "block") {
    dropdownNotification.style.display = "none";
  } else {
    dropdownNotification.style.display = "block";
  }

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".navbar-notification")) {
      dropdownNotification.style.display = "none";
    }
  });
};
const openUser = () => {
  var dropdownUser = document.querySelector(".dropdown-user");
  if (dropdownUser.style.display === "flex") {
    dropdownUser.style.display = "none";
  } else {
    dropdownUser.style.display = "flex";
  }

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".navbar-user")) {
      dropdownUser.style.display = "none";
    }
  });
};
const openSwitchApp = () => {
  var dropdownSwitchApp = document.querySelector(".dropdown-switch-app");
  if (dropdownSwitchApp.style.display === "block") {
    dropdownSwitchApp.style.display = "none";
  } else {
    dropdownSwitchApp.style.display = "block";
  }

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".navbar-switch-app")) {
      dropdownSwitchApp.style.display = "none";
    }
  });
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_variables";
/* header */
.custom-header {
  background-color: #fcfbfc;
  position: absolute;
  z-index: 0;
  width: calc(100% - 240px);
  display: flex;
  padding: 20px 30px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-left: 240px;
  box-shadow: 0px 1px $color-black-10;
  top: 0;

  .custom-navbar-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 6px;

    span {
      &:first-child {
        font-size: 26px;
        font-weight: 600;
        color: $color-black-100;
        line-height: normal;
      }
      &:last-child {
        font-size: 12px;
        font-weight: 400;
        color: $color-black-60;
        line-height: normal;
      }
    }
  }

  .custom-navbar-right {
    display: flex;
    align-items: center;
    column-gap: 28px;
    .tabler-icon {
      width: 20px;
      height: 20px;
      color: $color-black-100;
    }
    .navbar-notification {
      position: relative;
      display: flex;
      padding: 7px 6px 5px 8px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      cursor: pointer;
      &:hover {
        background-color: $color-black-01;
      }
      .has-notif {
        height: 10px;
        width: 10px;
        background-color: $color-red;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        right: 5px;
      }
      .dropdown-notification {
        width: 320px;
        display: none;
        position: absolute;
        top: 32px;
        right: 0;
        border-radius: 12px;
        background-color: $color-white;
        box-shadow: 0px 2px 8px 0px rgba(18, 18, 18, 0.12);
        .head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          border-bottom: 1px solid $color-black-10;
          :first-child {
            font-size: 14px;
            font-weight: 700;
          }
          :last-child {
            font-size: 14px;
            font-weight: 400;
          }
        }
        .body {
          height: auto;
          max-height: 410px;
          overflow-y: auto;
          .list-notification-nodata {
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            p {
              color: $color-black-100;
              font-size: 18px;
              font-weight: 700;
              margin-bottom: 0;
              &:last-child {
                color: $color-black-60;
                font-size: 14px;
                font-weight: 400;
                margin-bottom: 0;
              }
            }
          }
          .list-notification-data {
            margin: 7px 12px;
            padding: 8px;
            display: flex;
            align-items: flex-start;
            align-self: stretch;
            column-gap: 16px;
            background-color: $color-light-green;
            border-radius: 12px;
            &.readed {
              background-color: $color-white;
              &:hover {
                background-color: $color-black-01;
              }
            }
            .tabler-icon-bell {
              width: 30px;
              height: 30px;
              padding: 8px;
              border-radius: 20px;
              background-color: $color-black-01;
            }
            .notif-text {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              row-gap: 5px;
              p:first-child {
                font-size: 12px;
                font-weight: 500;
                color: $color-black-100;
                margin-bottom: 0;
                position: relative;
                .notif {
                  height: 10px;
                  width: 10px;
                  background-color: $color-green;
                  border-radius: 50%;
                  position: absolute;
                  top: 0;
                  right: -15px;
                }
              }
              p:nth-child(2) {
                font-size: 12px;
                font-weight: 400;
                color: $color-black-100;
                margin-bottom: 0;
              }
              p:last-child {
                font-size: 12px;
                font-weight: 400;
                color: $color-black-40;
                margin-bottom: 0;
              }
            }
          }
        }
        .footer {
          color: $color-black-80;
          font-size: 14px;
          font-weight: 400;
          padding: 8.5px 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid $color-black-10;
        }
      }
    }
    .navbar-user {
      position: relative;
      display: flex;
      padding: 5px 10px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      column-gap: 10px;
      cursor: pointer;
      // &:hover {
      //   background-color: $color-black-01;
      // }
      .tabler-icon-chevron-down {
        color: $color-black-50;
      }
      .text-name {
        font-size: 14px;
        font-weight: bold;
        color: $color-black-90;
        text-align: right;
      }
      .text-group {
        font-size: 12px;
        color: $color-black-50;
        text-align: right;
      }
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        object-position: center;
      }
      .dropdown-user {
        width: 183px;
        display: none;
        position: absolute;
        top: 56px;
        right: 0;
        border-radius: 12px;
        background-color: $color-white;
        box-shadow: 0px 2px 8px 0px rgba(18, 18, 18, 0.12);
        flex-direction: column;
        gap: 10px;
        padding: 10px 0;
        .list {
          padding: 0 10px;
          &:hover {
            .link-text {
              background-color: $color-black-01;
            }
          }
          .link-text {
            border-radius: 8px;
            display: flex;
            align-items: center;
            column-gap: 12px;
            color: $color-black-70;
            font-size: 14px;
            font-weight: 500;
            width: 100%;
            padding: 12px 15px;
            svg {
              width: 18px;
              height: 18px;
              color: $color-black-70;
            }
          }
        }
        .list-user-logout {
          padding: 0 10px;
          &:hover {
            .link-text {
              background-color: $color-light-red;
            }
          }
          .link-text {
            border-radius: 8px;
            display: flex;
            align-items: center;
            column-gap: 12px;
            color: $color-red;
            font-size: 14px;
            font-weight: 500;
            width: 100%;
            padding: 12px 15px;
            svg {
              width: 18px;
              height: 18px;
              color: $color-red;
            }
          }
        }
      }
      .dropdown-group {
        width: 320px;
        display: none;
        position: absolute;
        top: 0;
        right: 183px;
        border-radius: 12px;
        background-color: $color-white;
        box-shadow: 0px 2px 8px 0px rgba(18, 18, 18, 0.12);
        .head {
          padding: 14px 16px;
          border-bottom: 1px solid $color-black-10;
          display: flex;
          justify-content: space-between;
          p {
            color: $color-black-100;
            font-size: 14px;
            font-weight: 700;
          }
          .view-all {
            color: $color-green;
            font-size: 14px;
            background-color: $color-white;
          }
        }
        .body {
          height: auto;
          max-height: 350px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          row-gap: 0;
          .list-group {
            margin: 12px;
            padding: 8px;
            display: flex;
            flex-direction: row;
            align-items: center;
            align-self: stretch;
            column-gap: 16px;
            position: relative;
            &:last-child {
              &::after {
                display: none;
              }
            }
            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 1px;
              left: 0px;
              bottom: -12px;
              background: $color-black-01;
            }
            &:hover {
              background-color: $color-black-01;
              border-radius: 12px;
            }
            .left {
              width: 100%;
              display: flex;
              align-items: center;
              column-gap: 8px;
              .tabler-icon {
                margin: 11px;
                width: 18px;
                height: 18px;
                color: $color-black-40;
              }
              p {
                &:first-child {
                  color: $color-black-100;
                  font-size: 14px;
                  font-weight: 500;
                  margin-bottom: 5px;
                  line-height: normal;
                  width: 185px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
                &:last-child {
                  color: $color-black-40;
                  font-size: 12px;
                  font-weight: 400;
                  margin-bottom: 0;
                  line-height: normal;
                  width: 185px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
            }
            .right {
              right: 15px;
              position: absolute;
            }
          }
        }
      }
    }
    .navbar-switch-app {
      position: relative;
      display: flex;
      padding: 5px 10px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      cursor: pointer;
      column-gap: 10px;
      .show-title {
        font-size: 14px;
        font-weight: 500;
        color: $color-black-100;
      }
      .img-product {
        width: 40px;
        height: 40px;
        object-fit: cover;
        object-position: center;
      }
      .tabler-icon-chevron-down {
        color: $color-black-50;
      }
      .dropdown-switch-app {
        width: 320px;
        display: none;
        position: absolute;
        top: 56px;
        right: 0;
        border-radius: 12px;
        background-color: $color-white;
        box-shadow: 0px 2px 8px 0px rgba(18, 18, 18, 0.12);
        .head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          border-bottom: 1px solid $color-black-10;
          p {
            color: $color-black-100;
            font-size: 14px;
            font-weight: 700;
          }
        }
        .body {
          height: auto;
          max-height: 410px;
          overflow-y: auto;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          .list {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 15px;
            border-radius: 12px;
            &:hover {
              background: $color-black-01;
            }
            img {
              width: 40px;
              height: 40px;
              object-fit: cover;
              object-position: center;
            }
            span {
              width: 100%;
              .title {
                font-size: 14px;
                font-weight: 500;
                color: $color-black-100;
              }
              .subTitle {
                font-size: 12px;
                color: $color-black-40;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box !important;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                white-space: normal;
              }
            }
            .tabler-icon-check {
              min-width: 24px;
              min-height: 24px;
              color: $color-green;
            }
          }
        }
      }
    }
  }
}

/* Radio */
[type="radio"] {
  transform: scale(1.5);
  -webkit-appearance: none;
  border: 1px solid $color-black-20;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  position: relative;
  top: 3px;
  &:checked {
    background-color: $color-green;
    border: 1px solid $color-green;
    &::before {
      content: "";
      // font-size: 12px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $color-white;
      background-image: url("~/assets/icon/check.svg");
      width: 12px;
      height: 12px;
      background-size: cover;
    }
  }
}
</style>
