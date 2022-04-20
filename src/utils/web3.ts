import { InjectedConnector } from "@web3-react/injected-connector";
import { ExternalProvider, getNetwork, JsonRpcFetchFunc } from "@ethersproject/providers"
import { Web3Provider } from "@ethersproject/providers"
import { BigNumberish } from "@ethersproject/bignumber";
import { formatUnits } from "@ethersproject/units";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useWeb3React } from "@web3-react/core";


export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 42161]})

//Patch networkChanged error
//@ts-ignore
injected.handleNetworkChanged = (networkId: string | number) => {
  console.debug("Handling 'networkChanged' event with payload", networkId)
    if (networkId === "loading") return; //Ignore loading, networkId as causes errors
    if (networkId === "0xNaN") return; //Ignore 0xNaN, when user doesn't set chainId

  //@ts-ignore
  injected.emitUpdate({ chainId: networkId, provider: window.ethereum })
}

export const walletConnectConnector = new WalletConnectConnector({ 
    rpc: { 
        1: 'https://eth-mainnet.alchemyapi.io/v2/wX_GqKH-cM5JzkPOdz3OkKiCMZyFEMsp',
        3: 'https://eth-ropsten.alchemyapi.io/v2/wX_GqKH-cM5JzkPOdz3OkKiCMZyFEMsp',
        4: 'https://eth-rinkeby.alchemyapi.io/v2/wX_GqKH-cM5JzkPOdz3OkKiCMZyFEMsp',
        5: 'https://eth-goerli.alchemyapi.io/v2/wX_GqKH-cM5JzkPOdz3OkKiCMZyFEMsp',
        42: 'https://eth-kovan.alchemyapi.io/v2/wX_GqKH-cM5JzkPOdz3OkKiCMZyFEMsp',
    } 
})



export function getProvider(provider: ExternalProvider | JsonRpcFetchFunc) {
    // console.log(provider);
    return new Web3Provider(provider);
}

export function formatAddress(value: string, length: number = 4) {
    return `${value.substring(0, length + 2)}...${value.substring(value.length - length)}`
}

export function getNetworkColor(chainId: number) {
    switch (chainId) {
        case 1: {
            return 'teal'
        }
        case 3: { // Ropsten
            return 'pink'
        }
        case 4: { // Rinkeby
            return 'yellow'
        }
        case 5: { // Goerli
            return 'blue'
        }
        case 10: { // Optmistic
            return 'red'
        }
        case 42: { // Kovan
            return 'purple'
        }
        case 42161: { // Arbitrum
            return 'cyan'
        }
        default: {
            return 'grey'
        }
    }
}

export function getNetworkName(chainId: number) {
    let name = getNetwork(chainId)?.name
    if (!name || name === 'homestead') return 'mainnet'
    if (chainId === 10) name = 'optimistic'
    if (chainId === 42161) name = 'arbitrum'
    
    return name
}

export function formatEtherscanLink(type: 'Account' | 'Transaction', value: string, chainId: number = 1) {
    const networkName = chainId ? 'www' : getNetwork(chainId).name

    switch (type) {
        case 'Account': {
            return `https://${networkName}.etherscan.io/address/${value}`
        }
        case 'Transaction': {
            return `https://${networkName}etherscan.io/tx/${value}`
        }
    }
}

export function getEtherscanBaseApiUri(chainId: number = 1) {
    const networkName = getNetwork(chainId).name

    switch (chainId) {
        case 1: {
            return `https://api.etherscan.io/api`
        }
        case 10: {
            return `https://api-optimistic.etherscan.io/api`
        }
        case 42161: {
            return `https://api.arbiscan.io/api`
        }
        default: {
            return `https://api-${networkName}.etherscan.io/api`
        }
    }
}

export function parseBalance(value: BigNumberish, decimals = 18, decimalsToDisplay = 3) {
    return parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay)
}
