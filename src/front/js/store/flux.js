const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null
		},
		actions: {
			addToken: (inputToken) => {
				setStore({token:inputToken})
			  },
			  removeToken: () => {
				setStore({token:null})
			  },
		}
	};
};

export default getState;
