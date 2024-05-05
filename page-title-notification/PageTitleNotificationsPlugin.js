"use strict";

const { NOTIFICATION_INTERVAL_MS } = require("./constants/pageTitleNotificationsConstants");
const { stringInvariant } = require("../invariants/stringInvariant");

class PageTitleNotificationsPlugin {
  constructor() {
    this.handleShow = this.handleShow.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.notificationIntervalId = 0;
    this.notificationMessageIsInPageTitle = false;
    this.cachedOriginalDocumentTitle = '';
  }

  clearNotificationInterval() {
    clearInterval(this.notificationIntervalId);
  }

  notificationIntervalIsRunning() {
    return Boolean(this.notificationIntervalId);
  }

  start({ title }) {
    if (this.notificationIntervalIsRunning()) {
      return;
    }
    this.cachedOriginalDocumentTitle = document.title;
    this.togglePageTitle({ notificationTitle: title });
    this.notificationIntervalId = setInterval(() => {
      this.togglePageTitle({ notificationTitle: title });
    }, NOTIFICATION_INTERVAL_MS);
  }

  stop() {
    this.clearNotificationInterval();
    this.updatePageTitle(this.cachedOriginalDocumentTitle);
    this.notificationIntervalId = 0;
    this.notificationMessageIsInPageTitle = false;
    this.cachedOriginalDocumentTitle = '';
  }

  togglePageTitle({ notificationTitle }) {
    if (this.notificationMessageIsInPageTitle) {
      this.updatePageTitle(this.cachedOriginalDocumentTitle);
      this.notificationMessageIsInPageTitle = false;
    } else {
      this.updatePageTitle(notificationTitle);
      this.notificationMessageIsInPageTitle = true;
    }
  }

  handleShow({ data }) {
    this.start({ title: data.title });
  }

  handleClear() {
    this.stop();
  }

  updatePageTitle(title) {
    stringInvariant(title);
    document.title = title;
  }
}

module.exports = PageTitleNotificationsPlugin;
