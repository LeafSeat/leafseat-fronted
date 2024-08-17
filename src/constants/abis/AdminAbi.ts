export const AdminAbi = [{"type":"constructor","inputs":[{"name":"_NFTAddress","type":"address","internalType":"address"},{"name":"_tokenAddress","type":"address","internalType":"address payable"},{"name":"_IsAdminAddress","type":"address","internalType":"address"},{"name":"_USDTAddress","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"function","name":"AwardToken","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"AwardUSDT","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"award","inputs":[{"name":"_tokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"buy","inputs":[{"name":"_tokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"film","inputs":[{"name":"_room","type":"uint8","internalType":"uint8"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"getAwardToken","inputs":[{"name":"_sender","type":"address","internalType":"address"},{"name":"_tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"getAwardUSDT","inputs":[{"name":"_sender","type":"address","internalType":"address"},{"name":"_tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"rent","inputs":[{"name":"_tokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"withdraw","inputs":[{"name":"_tokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"event","name":"EAwardToken","inputs":[{"name":"","type":"address","indexed":false,"internalType":"address"},{"name":"","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"","type":"bool","indexed":false,"internalType":"bool"},{"name":"","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"EAwardUSDT","inputs":[{"name":"","type":"address","indexed":false,"internalType":"address"},{"name":"","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"","type":"bool","indexed":false,"internalType":"bool"},{"name":"","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false}] as const;