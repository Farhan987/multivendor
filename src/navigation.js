import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
//AuthScreens
import LoginScreen from "./screens/authScreens/loginScreen";
import SignUpScreen from "./screens/authScreens/signupScreen";
import CodeVerification from "./screens/authScreens/verificationCodeScreen";
import SplashScreen from "./screens/authScreens/splashScreen";
//Account Screen
import BanckAccountScreen from "./screens/accountScreens/bankAccounts";
import DrawerScreen from "./screens/accountScreens/drawerScreen";
import EditCardScreen from "./screens/accountScreens/editCardScreen";
import EditProfileScreen from "./screens/accountScreens/editProfileScreen";
import NotificationScreen from "./screens/accountScreens/notificationScreen";
import OrderHistoryScreen from "./screens/accountScreens/orderHistoryScreen";
import ShippingAdressScreen from "./screens/accountScreens/shippingAddress";
import TrackOrderScreen from "./screens/accountScreens/trackOrderScreen";
import WishListScreen from "./screens/accountScreens/wishlistScreen";
import TrackingScreen from "./screens/accountScreens/TrackingScreen";
//CartScreen
import CartDetailScreen from "./screens/cartScreens/cartDetail";
import CartSwipableScreen from "./screens/cartScreens/cartSwipeableList";
//ChecOut
import AdressScreen from "./screens/checkOut/Address";
import PaymentScreen from "./screens/checkOut/Payment";
import SummaryScreen from "./screens/checkOut/Summary";
//ExploreCatagory
import BestBillingItemScreen from "./screens/exploreCategoryScreens/bestSellingItemScreen";
import CategoriesFilterScreen from "./screens/exploreCategoryScreens/categoriesFilterScreen";
import CategoriesScreen from "./screens/exploreCategoryScreens/categoriesScreen";
import GadgetScreen from "./screens/exploreCategoryScreens/gadgetScreen";
import itemDetailScreen from "./screens/exploreCategoryScreens/itemDetailScreen";
import itemDetailScrollScreen from "./screens/exploreCategoryScreens/itemDetailScrollScreen";
import itemReviewScreen from "./screens/exploreCategoryScreens/itemReviewScreen";
import RecommendedItemScreen from "./screens/exploreCategoryScreens/recommendedItemScreen";

const AppDrawer = createDrawerNavigator(
  {
    BestBillingItemScreen: { screen: BestBillingItemScreen },
    EditProfileScreen: { screen: EditProfileScreen },
    NotificationScreen: { screen: NotificationScreen },
    OrderHistoryScreen: { screen: OrderHistoryScreen },
    ShippingAdressScreen: { screen: ShippingAdressScreen },
    TrackOrderScreen: { screen: TrackOrderScreen },
    WishListScreen: { screen: WishListScreen },
    BanckAccountScreen: { screen: BanckAccountScreen },
    CategoriesScreen: { screen: CategoriesScreen },
    itemDetailScrollScreen: { screen: itemDetailScrollScreen }
  },
  {
    contentComponent: DrawerScreen
  }
);

const UserStackNavigator = createStackNavigator(
  {
    //Explore Screens
    BestBillingItemScreen: { screen: BestBillingItemScreen },
    CategoriesFilterScreen: { screen: CategoriesFilterScreen },
    CategoriesScreen: { screen: CategoriesScreen },
    GadgetScreen: { screen: GadgetScreen },
    itemDetailScreen: { screen: itemDetailScreen },
    itemDetailScrollScreen: { screen: itemDetailScrollScreen },
    itemReviewScreen: { screen: itemReviewScreen },
    RecommendedItemScreen: { screen: RecommendedItemScreen },
    //Cart Screens
    CartDetailScreen: { screen: CartDetailScreen },
    CartSwipableScreen: { screen: CartSwipableScreen },

    //Checkout Screens
    AdressScreen: { screen: AdressScreen },
    PaymentScreen: { screen: PaymentScreen },
    SummaryScreen: { screen: SummaryScreen },

    //Account Screens
    BanckAccountScreen: { screen: BanckAccountScreen },
    DrawerScreen: { screen: DrawerScreen },
    EditCardScreen: { screen: EditCardScreen },
    EditProfileScreen: { screen: EditProfileScreen },
    NotificationScreen: { screen: NotificationScreen },
    OrderHistoryScreen: { screen: OrderHistoryScreen },
    ShippingAdressScreen: { screen: ShippingAdressScreen },
    TrackOrderScreen: { screen: TrackOrderScreen },
    WishListScreen: { screen: WishListScreen },
    TrackingScreen: { screen: TrackingScreen }
  },
  {
    initialRouteName: "BestBillingItemScreen"
  }
);

const AuthStackNavigator = createSwitchNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    SignUpScreen: { screen: SignUpScreen },
    LoginScreen: { screen: LoginScreen },
    CodeVerification: { screen: CodeVerification },
    MyDrawerScreen: { screen: AppDrawer }
  },
  {
    initialRouteName: "SplashScreen"
  }
);

const AppNavigator = createSwitchNavigator(
  {
    AuthScreens: { screen: AuthStackNavigator },
    UserScreens: { screen: UserStackNavigator }
  },
  {
    initialRouteName: "AuthScreens",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
