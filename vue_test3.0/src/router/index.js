import { createRouter, createWebHashHistory } from "vue-router";
import   Home  from "../component/Home.vue";
import  About  from "../component/About.vue";
import  News from "../component/New.vue";




const routes = [
	{
		path: "/home",
		name: "Home",
		component: Home,
    children: [
      {
        path: '/home/news',
        component: News
      },
      {
        path: '/',
        redirect: '/about'
      }
    ]
    
	},{
    path: "/about",
		name: "About",
		component: About,
  }
  
  
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;