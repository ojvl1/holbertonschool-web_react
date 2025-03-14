// notificationsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    displayDrawer: false,
  },
  reducers: {
    fetchNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    markNotificationAsRead: (state, action) => {
      const notificationId = action.payload;
      state.notifications = state.notifications.map((notification) =>
        notification.id === notificationId ? { ...notification, read: true } : notification
      );
    },
    showDrawer: (state) => {
      state.displayDrawer = true;
    },
    hideDrawer: (state) => {
      state.displayDrawer = false;
    },
  },
});

export const { fetchNotifications, markNotificationAsRead, showDrawer, hideDrawer } = notificationsSlice.actions;
export default notificationsSlice.reducer;