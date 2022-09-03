export interface Param {
	scheme: string;
}

export interface Toolbar_menu {
	type: string;
	name: string;
	pic: string;
	params: Param;
	scheme: string;
}

export interface UserInfo {
	id: number;
	screen_name: string;
	profile_image_url: string;
	profile_url: string;
	statuses_count: number;
	verified: boolean;
	verified_type: number;
	close_blue_v: boolean;
	description: string;
	gender: string;
	mbtype: number;
	urank: number;
	mbrank: number;
	follow_me: boolean;
	following: boolean;
	follow_count: number;
	followers_count: string;
	followers_count_str: string;
	cover_image_phone: string;
	avatar_hd: string;
	like: boolean;
	like_me: boolean;
	toolbar_menus: Toolbar_menu[];
}

export interface Tab {
	id: number;
	tabKey: string;
	must_show: number;
	hidden: number;
	title: string;
	tab_type: string;
	containerid: string;
}

export interface TabsInfo {
	selectedTab: number;
	tabs: Tab[];
}

export interface BaseUser {
	isStarStyle: number;
	userInfo: UserInfo;
	fans_scheme: string;
	follow_scheme: string;
	tabsInfo: TabsInfo;
	profile_ext: string;
	scheme: string;
	showAppTips: number;
}
