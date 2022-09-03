export interface CardlistInfo {
  containerid: string;
  v_p: number;
  show_style: number;
  total: number;
  since_id: number;
}

export interface Visible {
  type: number;
  list_id: number;
}

export interface Badge {
  bind_taobao: number;
  unread_pool: number;
}

export interface User {
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
  badge: Badge;
}

export interface Hot_page {
  fid: string;
  feed_detail_type: number;
}

export interface Number_display_strategy {
  apply_scenario_flag: number;
  display_text_min_number: number;
  display_text: string;
}

export interface Comment_manage_info {
  comment_permission_type: number;
  approval_comment_type: number;
  comment_sort_type: number;
}

export interface Edit_config {
  edited: boolean;
}

export interface Mblog {
  visible: Visible;
  created_at: string;
  id: string;
  mid: string;
  can_edit: boolean;
  show_additional_indication: number;
  text: string;
  source: string;
  favorited: boolean;
  pic_ids: any[];
  is_paid: boolean;
  mblog_vip_type: number;
  user: User;
  reposts_count: number;
  comments_count: number;
  reprint_cmt_count: number;
  attitudes_count: number;
  pending_approval_count: number;
  isLongText: boolean;
  mlevel: number;
  darwin_tags: any[];
  hot_page: Hot_page;
  mblogtype: number;
  rid: string;
  extern_safe: number;
  number_display_strategy: Number_display_strategy;
  content_auth: number;
  comment_manage_info: Comment_manage_info;
  pic_num: number;
  new_comment_style: number;
  ab_switcher: number;
  mblog_menu_new_style: number;
  edit_config: Edit_config;
  bid: string;
}

export interface Card {
  card_type: number;
  profile_type_id: string;
  itemid: string;
  scheme: string;
  mblog: Mblog;
}

export interface PostsList {
  cardlistInfo: CardlistInfo;
  cards: Card[];
  scheme: string;
  showAppTips: number;
}
