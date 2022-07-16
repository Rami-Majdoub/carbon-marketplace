export const contract_address = '0x9151F05fAf0cD5771428C99F81a5DC85349EbEE0';
export const contract_abi = [
  'constructor()',
  'event NewAddressRegistered(address addr, uint8 role)',
  'function addProject(string name) @29000000',
  'function deleteProject(uint256 id) @29000000',
  'function deployer() view returns (address) @29000000',
  'function editProject(uint256 id, string name) @29000000',
  'function isAdmin(address address_) view returns (bool) @29000000',
  'function isAuditor(address address_) view returns (bool) @29000000',
  'function isProjectOwner(address address_) view returns (bool) @29000000',
  'function registerAdmin(address address_) @29000000',
  'function registerAuditor(address address_) @29000000',
  'function registerProjectOwner(address address_) @29000000',
  'function removeUser(address address_) @29000000',
  'function roles(address) view returns (uint8) @29000000'
];
