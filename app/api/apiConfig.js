export const settingsAPIs = {
    DEFAULT_WS_NODE: "wss://fake.automatic-selection.com",
    // DEFAULT_WS_NODE: "ws://127.0.0.1:8090",
    WS_NODE_LIST: [
        {
            url: "wss://fake.automatic-selection.com",
            location: {translate: "settings.api_closest"}
        },
        {url: "ws://127.0.0.1:8090", location: "Locally hosted"},
        {url: "wss://id.localcoin.is", location: "Indonesia by billpresta3101"},
        {url: "wss://hk.localcoin.is", location: "Hong Kong by vdon61"},
        {url: "wss://us.localcoin.is", location: "US by crazy-indain"},
        {url: "wss://ru1.localcoin.is", location: "Russia by george2607"},
        {url: "wss://ru2.localcoin.is", location: "Russia by albert-andersen"},
        {url: "wss://ua.localcoin.is", location: "Ukraine by l0l"},
        {url: "wss://de1.localcoin.is", location: "Germany by firedswiss1"},
        {url: "wss://mysupremecoin.com", location: "Italy by the-supreme19"},
        {url: "wss://bebe3101.space", location: "Germany by bebe3101"},
        {url: "wss://uk.localcoin.is", location: "UK by riggen01"},
        {url: "wss://au.localcoin.is", location: "Australia by ip23"},
        {url: "wss://de.localcoin.is", location: "Germany"},
        {url: "wss://fi.localcoin.is", location: "Finland"},
        {url: "wss://ru.localcoin.is", location: "Russia"}
    ],
    DEFAULT_FAUCET: "https://faucet.localcoin.is", // 2018-12-infrastructure worker proposal
    TESTNET_FAUCET: "https://faucet.testnet.localcoin.is",
    RPC_URL: "https://api.llc.is/apidocs/"
};
