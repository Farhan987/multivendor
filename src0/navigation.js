import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
const AuthStackNavigator = createSwitchNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    SwiperScreen: { screen: SwiperScreen },
    FamilyLoginScreen: { screen: FamilyLoginScreen },
    SignUpScreen: { screen: SignUpScreen },
    IndividualLoginScreen: { screen: IndividualLoginScreen },
    PasswordRecoveryEmailScreen: { screen: PasswordRecoveryEmail },
    ForgetPasswordScreen: { screen: ForgetPasswordScreen },
    FamilyDashbordScreen: { screen: FamilyDashbordScreen }
  },
  {
    initialRouteName: "SplashScreen"
  }
);

const AdminStackNavigator = createStackNavigator(
  {
    AdminDashboardScreen: { screen: AdminDashboardScreen },
    DeleteMemberFromAdminScreen: { screen: DeleteMemberFromAdminScreen },
    AddUserScreen: { screen: AddUserScreen },
    AddFromChatScreen: { screen: AddFromChatScreen },
    AddTaskScreen: { screen: AddTaskScreen },
    AddItemScreen: { screen: AddItemScreen },
    AddPredefinedTaskScreen: { screen: AddPredefinedTaskScreen },
    EditPreDefinedScreen: { screen: EditPreDefinedScreen },
    AllChatScreen: { screen: AllChatScreen },
    SettingScreen: { screen: SettingScreen },
    EditProfileScreen: { screen: EditProfileScreen },
    AddTaskItem: { screen: AddTaskItem },
    UserProfileScreen: { screen: UserProfileScreen },
    TaskListScreen: { screen: TaskListScreen },
    ItemListScreen: { screen: ItemListScreen },
    PreDefinedTask: { screen: PreDefinedTask }
  },
  {
    initialRouteName: "AdminDashboardScreen"
  }
);

const UserStackNavigator = createStackNavigator(
  {
    AddTaskScreen: { screen: AddTaskScreen },
    AddItemScreen: { screen: AddItemScreen },
    AllChatScreen: { screen: AllChatScreen },
    AddTaskItem: { screen: AddTaskItem },
    UserProfileScreen: { screen: UserProfileScreen },
    TaskListScreen: { screen: TaskListScreen },
    ItemListScreen: { screen: ItemListScreen }
  },
  {
    initialRouteName: "TaskListScreen"
  }
);

const AppNavigator = createSwitchNavigator(
  {
    AuthScreens: { screen: AuthStackNavigator },
    AdminScreens: { screen: AdminStackNavigator },
    UserScreens: { screen: UserStackNavigator }
  },
  {
    initialRouteName: "AuthScreens"
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
