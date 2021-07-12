import { createStore } from "vuex";

const store = createStore(
    {
        state()
        {
            return {
                isLoggedIn: false,
                isLoginScreen: false,
            }
        },
        mutations:
        {
            setIsLoggedIn(state, payload)
            {
                state.isLoggedIn = payload;
            },
            setIsLoginScreen(state, payload)
            {
                state.isLoginScreen = payload;
            }
        }
    }
)

export default store;