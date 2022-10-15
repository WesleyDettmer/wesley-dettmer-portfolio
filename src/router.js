import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/main/MainLanding.vue';
import Work from './views/main/MainWorks.vue';
import Skills from './views/main/MainSkills.vue';
import notfound from './views/ErrorPage.vue';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'homepg',
			component: Home,
			props: true
		},
		{
			path: '/work',
			name: 'work',
			component: Work,
			props: true
		},
		{
			path: '/skills',
			name: 'skills',
			component: Skills,
			props: true
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'notfound',
			component: notfound,
			props: true
		}
	]
});
