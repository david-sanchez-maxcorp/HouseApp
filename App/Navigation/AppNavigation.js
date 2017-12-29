import { StackNavigator, DrawerNavigator } from "react-navigation";
import AboutScreen from "../Containers/AboutScreen";
import EstimatedPriceScreen from "../Containers/EstimatedPriceScreen";
import StreetScreen from "../Containers/StreetScreen";
import ForgotPasswordScreen from "../Containers/ForgotPasswordScreen";
import SignupScreen from "../Containers/SignupScreen";
import LoginScreen from "../Containers/LoginScreen";
import InitialScreen from "../Containers/InitialScreen";
import LaunchScreen from "../Containers/LaunchScreen";
import { Colors } from "../Themes";
import styles from "./Styles/NavigationStyles";

const StreetStackNavigator = StackNavigator(
  {
    StreetScreen: {
      screen: StreetScreen,
      navigationOptions: {
        headerTitle: "Address",
        headerTintColor: Colors.white,
        headerStyle: styles.header
      }
    }
  },
  {
    headerMode: "screen"
  }
);

const EstimatedPriceStackNavigator = StackNavigator(
  {
    EstimatedPriceScreen: {
      screen: EstimatedPriceScreen,
      navigationOptions: {
        headerTitle: "Estimated Price",
        headerTintColor: Colors.white,
        headerStyle: styles.header
      }
    }
  },
  {
    headerMode: "screen"
  }
);

const AboutStackNavigator = StackNavigator(
  {
    AboutScreen: {
      screen: AboutScreen,
      navigationOptions: {
        headerTitle: "About Us",
        headerTintColor: Colors.white,
        headerStyle: styles.header
      }
    }
  },
  {
    headerMode: "screen"
  }
);

const MainDrawerNavigator = DrawerNavigator({
  StreetScreen: {
    screen: StreetStackNavigator
  },
  EstimatedPriceScreen: {
    screen: EstimatedPriceStackNavigator
  },
  AboutScreen: {
    screen: AboutStackNavigator
  }
});

const AuthStack = StackNavigator(
  {
    InitialScreen: {
      screen: InitialScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    SignupScreen: {
      screen: SignupScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    ForgotPasswordScreen: {
      screen: ForgotPasswordScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Main: {
      screen: MainDrawerNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "Main",
    headerMode: "none"
  }
);

export default AuthStack;
