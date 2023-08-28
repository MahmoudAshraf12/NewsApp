import { NavigationProp, Route, RouteProp } from "@react-navigation/native";

export type NewsData = {
    title: String;
    link: String;
    keywords: String[];
    creator: String;
    video_url: String;
    description: String;
    content: String;
    pubDate: String;
    image_url: string;
    source_id: String;
    category: String[];
    country: String;
    language: String;
};

// Define your route configurations
type RootStackParamList = {
    Details: { itemId: string };
    // Add other routes as needed
};
export type ComponentNavigationProp<T extends keyof RootStackParamList> = {
    navigation: NavigationProp<RootStackParamList, T>;
    route: RouteProp<RootStackParamList, T>;
}