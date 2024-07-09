export interface IAreaChartProps {
  data: number[][];
}

export interface ILineChartProps {
  data: any;
}

interface Roi {
  times: number;
  currency: string;
  percentage: number;
}

interface CommunityData {
  facebook_likes: number | null;
  twitter_followers: number;
  reddit_average_posts_48h: number;
  reddit_average_comments_48h: number;
  reddit_subscribers: number;
}

interface DeveloperData {
  forks: number;
  stars: number;
  subscribers: number;
  total_issues: number;
  closed_issues: number;
  // Добавьте другие свойства по мере необходимости
}

interface Image {
  thumb: string;
  small: string;
  large: string;
}

interface Links {
  homepage: string[];
  whitepaper: string;
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  // Добавьте другие свойства по мере необходимости
}

interface Localization {
  en: string;
  de: string;
  es: string;
  fr: string;
  it: string;
  // Добавьте другие языки по мере необходимости
}

interface CurrencyData {
  [key: string]: number;
}

interface CurrencyDateData {
  [key: string]: string;
}

interface MarketData {
  ath: CurrencyData;
  ath_change_percentage: CurrencyData;
  ath_date: CurrencyDateData;
  atl: CurrencyData;
  atl_change_percentage: CurrencyData;
  atl_date: CurrencyDateData;
  circulating_supply: number;
  current_price: CurrencyData;
  fdv_to_tvl_ratio: number | null;
  fully_diluted_valuation: CurrencyData;
  high_24h: CurrencyData;
  last_updated: string;
  low_24h: CurrencyData;
  market_cap: CurrencyData;
  market_cap_change_24h: number;
  market_cap_change_24h_in_currency: CurrencyData;
  market_cap_change_percentage_24h: number;
  market_cap_change_percentage_24h_in_currency: CurrencyData;
  market_cap_fdv_ratio: number;
  market_cap_rank: number;
  max_supply: number;
  mcap_to_tvl_ratio: number | null;
  price_change_24h: number;
  price_change_24h_in_currency: CurrencyData;
  price_change_percentage_1h_in_currency: CurrencyData;
  price_change_percentage_1y: number;
  price_change_percentage_1y_in_currency: CurrencyData;
  price_change_percentage_7d: number;
  price_change_percentage_7d_in_currency: CurrencyData;
  price_change_percentage_14d: number;
  price_change_percentage_14d_in_currency: CurrencyData;
  price_change_percentage_24h: number;
  price_change_percentage_24h_in_currency: CurrencyData;
  price_change_percentage_30d: number;
  price_change_percentage_30d_in_currency: CurrencyData;
  price_change_percentage_60d: number;
  price_change_percentage_60d_in_currency: CurrencyData;
  price_change_percentage_200d: number;
  price_change_percentage_200d_in_currency: CurrencyData;
  roi: number | null;
  total_supply: number;
  total_value_locked: number | null;
  total_volume: CurrencyData;
}
interface Data {
  additional_notices: any[];
  asset_platform_id: string | null;
  block_time_in_minutes: number;
  categories: string[];
  community_data: CommunityData;
  country_origin: string;
  description: Record<string, string>;
  detail_platforms: Record<string, any>;
  developer_data: DeveloperData;
  genesis_date: string;
  hashing_algorithm: string;
  id: string;
  image: Image;
  last_updated: string;
  links: Links;
  localization: Localization;
  market_cap_rank: number;
  market_data: MarketData;
  name: string;
  platforms: Record<string, string>;
  preview_listing: boolean;
  public_notice: string | null;
  sentiment_votes_down_percentage: number;
  sentiment_votes_up_percentage: number;
  status_updates: any[];
  symbol: string;
  tickers: any[];
  watchlist_portfolio_users: number;
  web_slug: string;
}

export interface Cryptocurrency {
  name: string;
  data: Data;
}
