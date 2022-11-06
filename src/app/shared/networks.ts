export const NETWORKS = {
  polygon: {
    chainId: '0x89',
    chainName: 'Polygon',
    nativeCurrency: {
      symbol: 'MATIC',
      decimals: 18,
      name: 'MATIC',
    },
    blockExplorerUrls: ['https://polygonscan.com/'],
    rpcUrls: ['https://polygon-rpc.com'],
  },
  goerli: {
    chainId: '0x5',
    chainName: 'Görli',
    nativeCurrency: {
      name: 'GoerliETH',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://goerli.etherscan.io/'],
    rpcUrls: ['https://goerli.infura.io/v3/'],
  },
};