import lilAave from "../assets/quests/lilAave.png"
import lilMetamask from "../assets/quests/lilMetamask.png"
import lilHardhat from "../assets/quests/lilHardhat.png"
import lilRemix from "../assets/quests/lilRemix.png"
import lilWalletConnect from "../assets/quests/lilWalletConnect.png"
import lilGraph from "../assets/quests/lilGraph.png"

const questData = [
    {
        "id": "lil Metamask",
        "description": "Create your first transaction via MetaMask",
        "img": lilMetamask,
        "enabled": true,
        "detailedDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "introContentOne": "https://www.youtube.com/watch?v=VgsODQMGI2M",
        "introContentTwo": "https://www.youtube.com/watch?v=VgsODQMGI2M",
        "introContentThree": "https://www.youtube.com/watch?v=VgsODQMGI2M",
    },
    {
        "id": "lil WalletConnect",
        "description": "Create and deploy your first Smart Contract",
        "img": lilWalletConnect,
        "enabled": true
    },
    {
        "id": "lil Remix",
        "description": "Deploy your first Smart Contract via Remix",
        "img": lilRemix,
        "enabled": false
    },
    {
        "id": "lil Hardhat",
        "description": "Deploy your first Smart Contract via Hardhat",
        "img": lilHardhat,
        "enabled": false
    },
    {
        "id": "lil Graph",
        "description": "Create your first subGraph via The Graph",
        "img": lilGraph,
        "enabled": false
    },
    {
        "id": "lil Flashloan",
        "description": "Create your first flashloan via Aave",
        "img": "https://cdn.allthings.how/wp-content/uploads/2021/12/allthings.how-what-does-it-mean-to-mint-an-nft-mint-nft.png",
        "img": lilAave,
        "enabled": false
    }
]

export default questData;