export let PagesDataStore = {
    state() {
        return {
            showTokenPage: true,
            Admin: false,
            showAdminPage: false,
            showNewsPage: false,

            showMainPage: false,
            showSettingsPage: false,
            showCalendarPage: false,
            showAllPersonsPage: false,

            showEditProfilePage: false,
            showProVersionPage: false,
            showLeisurePage: false,
            showAllToDoPage: false,

            showAddEventPage: false,
            showAddPersonPage: false,
            showAddNewsPage: false,
            showAddToDoPage: false,
        }
    },
    getters: {
        getShowTokenPage(state) {
            return state.showTokenPage;
        },

        getShowMainPage(state) {
            return state.showMainPage;
        },
        getShowSettingsPage(state) {
            return state.showSettingsPage;
        },
        getShowCalendarPage(state) {
            return state.showCalendarPage;
        },
        getShowAllPersonsPage(state) {
            return state.showAllPersonsPage;
        },

        getShowEditProfilePage(state) {
            return state.showEditProfilePage;
        },
        getShowProVersionPage(state) {
            return state.showProVersionPage;
        },
        getShowLeisurePage(state) {
            return state.showLeisurePage;
        },
        getShowAllToGoPage(state) {
            return state.showAllToDoPage;
        },

        getShowAddEventPage(state) {
            return state.showAddEventPage;
        },
        getShowAddPersonPage(state) {
            return state.showAddPersonPage;
        },
        getShowAddNewsPage(state) {
            return state.showAddNewsPage;
        },
        getShowAddToDoPage(state) {
            return state.showAddToDoPage;
        },

        getAdmin(state) {
            return state.Admin;
        },
        getShowAdminPage(state) {
            return state.showAdminPage;
        },
        getShowNewsPage(state) {
            return state.showNewsPage;
        }
    },
    mutations: {
        setShowTokenPage(state, new_val) {
            state.showTokenPage = new_val;
        },

        setShowMainPage(state, new_val) {
            state.showMainPage = new_val;
        },
        setShowSettingsPage(state, new_val) {
            state.showSettingsPage = new_val;
        },
        setShowCalendarPage(state, new_val) {
            state.showCalendarPage = new_val;
        },
        setShowAllPersonsPage(state, new_val) {
            state.showAllPersonsPage = new_val;
        },

        setShowEditProfilePage(state, new_val) {
            state.showEditProfilePage = new_val;
        },
        setShowProVersionPage(state, new_val) {
            state.showProVersionPage = new_val;
        },
        setShowLeisurePage(state, new_val) {
            state.showLeisurePage = new_val;
        },
        setShowAllToDoPage(state, new_val) {
            state.showAllToDoPage = new_val;
        },

        setShowAddPersonPage(state, new_val) {
            state.showAddPersonPage = new_val;
        },
        setShowAddEventPage(state, new_val) {
            state.showAddEventPage = new_val;
        },
        setShowAddNewsPage(state, new_val) {
            state.showAddNewsPage = new_val;
        },
        setShowAddToDoPage(state, new_val) {
            state.showAddToDoPage = new_val;
        },

        setAdmin(state, new_val) {
            state.Admin = new_val
        },
        setShowAdminPage(state, new_val) {
            state.showAdminPage = new_val;
        },
        setShowNewsPage(state, new_val) {
            state.showNewsPage = new_val;
        }
    },
    actions: {
        closeAllPages({commit}) {
            commit('setShowTokenPage', false);

            commit('setShowMainPage', false);
            commit('setShowSettingsPage', false);
            commit('setShowCalendarPage', false);
            commit('setShowAllPersonsPage', false);

            commit('setShowEditProfilePage', false);
            commit('setShowProVersionPage', false);
            commit('setShowLeisurePage', false);
            commit('setShowAllToDoPage', false);

            commit('setShowAddEventPage', false);
            commit('setShowAddPersonPage', false);
            commit('setShowAddNewsPage', false);
            commit('setShowAddToDoPage', false);

            commit('setShowAdminPage', false);
            commit('setShowNewsPage', false)
        },
        loadTokenPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setAdmin', false);
            commit('setShowTokenPage', true);
        },
        loadMainPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowMainPage', true);
        },
        loadSettingsPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowSettingsPage', true);
        },
        loadCalendarPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowCalendarPage', true);
        },
        loadAllPersonsPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowAllPersonsPage', true);
        },

        loadEditProfilePage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowEditProfilePage', true);
        },
        loadProVersionPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowProVersionPage', true);
        },
        loadLeisurePage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowLeisurePage', true);
        },
        loadAllToDoPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowAllToDoPage', true);
        },

        loadAddEventPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowAddEventPage', true);
        },
        loadAddPersonPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowAddPersonPage', true);
        },
        loadAddNewsPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowAddNewsPage', true);
        },
        loadAddToDoPage({commit, dispatch}){
            dispatch('closeAllPages');
            commit('setShowAddToDoPage', true)
        },

        loadAdminPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowAdminPage', true);
        },
        loadNewsPage({commit, dispatch}) {
            dispatch('closeAllPages');
            commit('setShowNewsPage', true);
        },
        updateAdmin({commit}, {isAdmin}) {
            commit('setAdmin', isAdmin)
        }
    },
}