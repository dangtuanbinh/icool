interface Property {
  id: string;
  title: string;
  quantity: string;
}

interface Trait {
  id: number;
  title: string;
  properties: Property[];
}

interface Collection {}

export interface NftCollection {
  id: number;
  name: string;
  logoUrl: string;
  holders: string;
  floorPrice: number;
  marketCap: string;
  supply: number;
  volume: string;
  desc: string;
  network: string;
  traits: Trait[];
  collection: Collection[];
}

export const NftCollectionMock: NftCollection[] = [
  {
    id: 1,
    name: "CryptoPunks",
    logoUrl:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120",
    holders: "3,652",
    floorPrice: 66.78,
    volume: "452.5",
    marketCap: "3.3K",
    supply: 9.09,
    desc: "CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the 		inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s 	of London, Art|Basel Miami, and The PBS NewsHour.",
    network: "Ethereum",
    traits: [
      {
        id: 1,
        title: "Accessory",
        properties: [
          {
            id: "a1",
            title: "3 attributes",
            quantity: "25%",
          },
          {
            id: "a2",
            title: "Earrings",
            quantity: "25%",
          },
          {
            id: "a3",
            title: "2 attributes",
            quantity: "21%",
          },
        ],
      },
      {
        id: 2,
        title: "Type",
        properties: [
          {
            id: "t1",
            title: "Male",
            quantity: "60%",
          },
          {
            id: "t2",
            title: "Female",
            quantity: "38%",
          },
          {
            id: "t3",
            title: "Zoombie",
            quantity: "0.88%",
          },
        ],
      },
    ],
    collection: [
      {
        id: "8348",
        address: "0xb47e...3bbb",
        network: "Ethereum",
        standard: "ERC_721",
        estValue: 644.02,
        lastValue: 85.0,
        rarity: "1st/10,000",
        imgUrl:
          "https://web.zapper.fi/images/?url=https%3A%2F%2Fstorage.googleapis.com%2Fzapper-fi-assets%2Fnfts%2Fmedias%2Fa5b2ae128ef25ef6afb48331cc9c87b9ffe3e0764a3d69d39688a238f4a7260a.png&width=500&checksum=92707",
        history: [
          {
            id: "h1",
            name: "0x1da5...4170",
            ownedAt: "June 2,2020",
            ownBy: "Transfer",
            ownedDuration: "30 months",
          },
          {
            id: "h2",
            name: "seedphrase.eth",
            ownedAt: "May 20,2020",
            ownBy: "Bought for 85 ETH",
            ownedDuration: "13 days",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Bored Ape Yacht Club",
    logoUrl:
      "https://storage.googleapis.com/zapper-fi-assets/nft/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/Uc-tml-6_400x400.jpeg",
    holders: "3,652",
    floorPrice: 40.88,
    volume: "350",
    marketCap: "3.3K",
    supply: 9.09,
    desc: "Bored Ape Yacht Club launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s 	of London, Art|Basel Miami, and The PBS NewsHour.",
    network: "Ethereum",
    traits: [
      {
        id: 1,
        title: "Accessory",
        properties: [
          {
            id: "a1",
            title: "3 attributes",
            quantity: "25%",
          },
          {
            id: "a2",
            title: "Earrings",
            quantity: "25%",
          },
          {
            id: "a3",
            title: "2 attributes",
            quantity: "21%",
          },
        ],
      },
      {
        id: 2,
        title: "Type",
        properties: [
          {
            id: "t1",
            title: "Male",
            quantity: "60%",
          },
          {
            id: "t2",
            title: "Female",
            quantity: "38%",
          },
          {
            id: "t3",
            title: "Zoombie",
            quantity: "0.88%",
          },
        ],
      },
    ],
    collection: [
      {
        id: "8348",
        address: "0xb47e...3bbb",
        network: "Ethereum",
        standard: "ERC_721",
        estValue: 644.02,
        lastValue: 85.0,
        rarity: "1st/10,000",
        imgUrl:
          "https://web.zapper.fi/images/?url=https%3A%2F%2Fstorage.googleapis.com%2Fzapper-fi-assets%2Fnfts%2Fmedias%2Fa5b2ae128ef25ef6afb48331cc9c87b9ffe3e0764a3d69d39688a238f4a7260a.png&width=500&checksum=92707",
        history: [
          {
            id: "h1",
            name: "0x1da5...4170",
            ownedAt: "June 2,2020",
            ownBy: "Transfer",
            ownedDuration: "30 months",
          },
          {
            id: "h2",
            name: "seedphrase.eth",
            ownedAt: "May 20,2020",
            ownBy: "Bought for 85 ETH",
            ownedDuration: "13 days",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Vahalla",
    logoUrl:
      "https://i.seadn.io/gcs/files/d7936464d55988206c1b16c6929856f6.jpg?w=1280&auto=format",
    holders: "3,652",
    floorPrice: 55.78,
    volume: "410.5",
    marketCap: "3.3K",
    supply: 9.09,
    desc: "CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s 	of London, Art|Basel Miami, and The PBS NewsHour.",
    network: "Ethereum",
    traits: [
      {
        id: 1,
        title: "Accessory",
        properties: [
          {
            id: "a1",
            title: "3 attributes",
            quantity: "25%",
          },
          {
            id: "a2",
            title: "Earrings",
            quantity: "25%",
          },
          {
            id: "a3",
            title: "2 attributes",
            quantity: "21%",
          },
        ],
      },
      {
        id: 2,
        title: "Type",
        properties: [
          {
            id: "t1",
            title: "Male",
            quantity: "60%",
          },
          {
            id: "t2",
            title: "Female",
            quantity: "38%",
          },
          {
            id: "t3",
            title: "Zoombie",
            quantity: "0.88%",
          },
        ],
      },
    ],
    collection: [
      {
        id: "8348",
        address: "0xb47e...3bbb",
        network: "Ethereum",
        standard: "ERC_721",
        estValue: 644.02,
        lastValue: 85.0,
        rarity: "1st/10,000",
        imgUrl:
          "https://web.zapper.fi/images/?url=https%3A%2F%2Fstorage.googleapis.com%2Fzapper-fi-assets%2Fnfts%2Fmedias%2Fa5b2ae128ef25ef6afb48331cc9c87b9ffe3e0764a3d69d39688a238f4a7260a.png&width=500&checksum=92707",
        history: [
          {
            id: "h1",
            name: "0x1da5...4170",
            ownedAt: "June 2,2020",
            ownBy: "Transfer",
            ownedDuration: "30 months",
          },
          {
            id: "h2",
            name: "seedphrase.eth",
            ownedAt: "May 20,2020",
            ownBy: "Bought for 85 ETH",
            ownedDuration: "13 days",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Vahalla",
    logoUrl:
      "https://i.seadn.io/gcs/files/d7936464d55988206c1b16c6929856f6.jpg?w=1280&auto=format",
    holders: "3,652",
    floorPrice: 55.78,
    volume: "410.5",
    marketCap: "3.3K",
    supply: 9.09,
    desc: "CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s 	of London, Art|Basel Miami, and The PBS NewsHour.",
    network: "Ethereum",
    traits: [
      {
        id: 1,
        title: "Accessory",
        properties: [
          {
            id: "a1",
            title: "3 attributes",
            quantity: "25%",
          },
          {
            id: "a2",
            title: "Earrings",
            quantity: "25%",
          },
          {
            id: "a3",
            title: "2 attributes",
            quantity: "21%",
          },
        ],
      },
      {
        id: 2,
        title: "Type",
        properties: [
          {
            id: "t1",
            title: "Male",
            quantity: "60%",
          },
          {
            id: "t2",
            title: "Female",
            quantity: "38%",
          },
          {
            id: "t3",
            title: "Zoombie",
            quantity: "0.88%",
          },
        ],
      },
    ],
    collection: [
      {
        id: "8348",
        address: "0xb47e...3bbb",
        network: "Ethereum",
        standard: "ERC_721",
        estValue: 644.02,
        lastValue: 85.0,
        rarity: "1st/10,000",
        imgUrl:
          "https://web.zapper.fi/images/?url=https%3A%2F%2Fstorage.googleapis.com%2Fzapper-fi-assets%2Fnfts%2Fmedias%2Fa5b2ae128ef25ef6afb48331cc9c87b9ffe3e0764a3d69d39688a238f4a7260a.png&width=500&checksum=92707",
        history: [
          {
            id: "h1",
            name: "0x1da5...4170",
            ownedAt: "June 2,2020",
            ownBy: "Transfer",
            ownedDuration: "30 months",
          },
          {
            id: "h2",
            name: "seedphrase.eth",
            ownedAt: "May 20,2020",
            ownBy: "Bought for 85 ETH",
            ownedDuration: "13 days",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Vahalla",
    logoUrl:
      "https://i.seadn.io/gcs/files/d7936464d55988206c1b16c6929856f6.jpg?w=1280&auto=format",
    holders: "3,652",
    floorPrice: 55.78,
    volume: "410.5",
    marketCap: "3.3K",
    supply: 9.09,
    desc: "CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s 	of London, Art|Basel Miami, and The PBS NewsHour.",
    network: "Ethereum",
    traits: [
      {
        id: 1,
        title: "Accessory",
        properties: [
          {
            id: "a1",
            title: "3 attributes",
            quantity: "25%",
          },
          {
            id: "a2",
            title: "Earrings",
            quantity: "25%",
          },
          {
            id: "a3",
            title: "2 attributes",
            quantity: "21%",
          },
        ],
      },
      {
        id: 2,
        title: "Type",
        properties: [
          {
            id: "t1",
            title: "Male",
            quantity: "60%",
          },
          {
            id: "t2",
            title: "Female",
            quantity: "38%",
          },
          {
            id: "t3",
            title: "Zoombie",
            quantity: "0.88%",
          },
        ],
      },
    ],
    collection: [
      {
        id: "8348",
        address: "0xb47e...3bbb",
        network: "Ethereum",
        standard: "ERC_721",
        estValue: 644.02,
        lastValue: 85.0,
        rarity: "1st/10,000",
        imgUrl:
          "https://web.zapper.fi/images/?url=https%3A%2F%2Fstorage.googleapis.com%2Fzapper-fi-assets%2Fnfts%2Fmedias%2Fa5b2ae128ef25ef6afb48331cc9c87b9ffe3e0764a3d69d39688a238f4a7260a.png&width=500&checksum=92707",
        history: [
          {
            id: "h1",
            name: "0x1da5...4170",
            ownedAt: "June 2,2020",
            ownBy: "Transfer",
            ownedDuration: "30 months",
          },
          {
            id: "h2",
            name: "seedphrase.eth",
            ownedAt: "May 20,2020",
            ownBy: "Bought for 85 ETH",
            ownedDuration: "13 days",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Vahalla",
    logoUrl:
      "https://i.seadn.io/gcs/files/d7936464d55988206c1b16c6929856f6.jpg?w=1280&auto=format",
    holders: "3,652",
    floorPrice: 55.78,
    volume: "410.5",
    marketCap: "3.3K",
    supply: 9.09,
    desc: "CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s 	of London, Art|Basel Miami, and The PBS NewsHour.",
    network: "Ethereum",
    traits: [
      {
        id: 1,
        title: "Accessory",
        properties: [
          {
            id: "a1",
            title: "3 attributes",
            quantity: "25%",
          },
          {
            id: "a2",
            title: "Earrings",
            quantity: "25%",
          },
          {
            id: "a3",
            title: "2 attributes",
            quantity: "21%",
          },
        ],
      },
      {
        id: 2,
        title: "Type",
        properties: [
          {
            id: "t1",
            title: "Male",
            quantity: "60%",
          },
          {
            id: "t2",
            title: "Female",
            quantity: "38%",
          },
          {
            id: "t3",
            title: "Zoombie",
            quantity: "0.88%",
          },
        ],
      },
    ],
    collection: [
      {
        id: "8348",
        address: "0xb47e...3bbb",
        network: "Ethereum",
        standard: "ERC_721",
        estValue: 644.02,
        lastValue: 85.0,
        rarity: "1st/10,000",
        imgUrl:
          "https://web.zapper.fi/images/?url=https%3A%2F%2Fstorage.googleapis.com%2Fzapper-fi-assets%2Fnfts%2Fmedias%2Fa5b2ae128ef25ef6afb48331cc9c87b9ffe3e0764a3d69d39688a238f4a7260a.png&width=500&checksum=92707",
        history: [
          {
            id: "h1",
            name: "0x1da5...4170",
            ownedAt: "June 2,2020",
            ownBy: "Transfer",
            ownedDuration: "30 months",
          },
          {
            id: "h2",
            name: "seedphrase.eth",
            ownedAt: "May 20,2020",
            ownBy: "Bought for 85 ETH",
            ownedDuration: "13 days",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Vahalla",
    logoUrl:
      "https://i.seadn.io/gcs/files/d7936464d55988206c1b16c6929856f6.jpg?w=1280&auto=format",
    holders: "3,652",
    floorPrice: 55.78,
    volume: "410.5",
    marketCap: "3.3K",
    supply: 9.09,
    desc: "CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s 	of London, Art|Basel Miami, and The PBS NewsHour.",
    network: "Ethereum",
    traits: [
      {
        id: 1,
        title: "Accessory",
        properties: [
          {
            id: "a1",
            title: "3 attributes",
            quantity: "25%",
          },
          {
            id: "a2",
            title: "Earrings",
            quantity: "25%",
          },
          {
            id: "a3",
            title: "2 attributes",
            quantity: "21%",
          },
        ],
      },
      {
        id: 2,
        title: "Type",
        properties: [
          {
            id: "t1",
            title: "Male",
            quantity: "60%",
          },
          {
            id: "t2",
            title: "Female",
            quantity: "38%",
          },
          {
            id: "t3",
            title: "Zoombie",
            quantity: "0.88%",
          },
        ],
      },
    ],
    collection: [
      {
        id: "8348",
        address: "0xb47e...3bbb",
        network: "Ethereum",
        standard: "ERC_721",
        estValue: 644.02,
        lastValue: 85.0,
        rarity: "1st/10,000",
        imgUrl:
          "https://web.zapper.fi/images/?url=https%3A%2F%2Fstorage.googleapis.com%2Fzapper-fi-assets%2Fnfts%2Fmedias%2Fa5b2ae128ef25ef6afb48331cc9c87b9ffe3e0764a3d69d39688a238f4a7260a.png&width=500&checksum=92707",
        history: [
          {
            id: "h1",
            name: "0x1da5...4170",
            ownedAt: "June 2,2020",
            ownBy: "Transfer",
            ownedDuration: "30 months",
          },
          {
            id: "h2",
            name: "seedphrase.eth",
            ownedAt: "May 20,2020",
            ownBy: "Bought for 85 ETH",
            ownedDuration: "13 days",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Vahalla",
    logoUrl:
      "https://i.seadn.io/gcs/files/d7936464d55988206c1b16c6929856f6.jpg?w=1280&auto=format",
    holders: "3,652",
    floorPrice: 55.78,
    volume: "410.5",
    marketCap: "3.3K",
    supply: 9.09,
    desc: "CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s 	of London, Art|Basel Miami, and The PBS NewsHour.",
    network: "Ethereum",
    traits: [
      {
        id: 1,
        title: "Accessory",
        properties: [
          {
            id: "a1",
            title: "3 attributes",
            quantity: "25%",
          },
          {
            id: "a2",
            title: "Earrings",
            quantity: "25%",
          },
          {
            id: "a3",
            title: "2 attributes",
            quantity: "21%",
          },
        ],
      },
      {
        id: 2,
        title: "Type",
        properties: [
          {
            id: "t1",
            title: "Male",
            quantity: "60%",
          },
          {
            id: "t2",
            title: "Female",
            quantity: "38%",
          },
          {
            id: "t3",
            title: "Zoombie",
            quantity: "0.88%",
          },
        ],
      },
    ],
    collection: [
      {
        id: "8348",
        address: "0xb47e...3bbb",
        network: "Ethereum",
        standard: "ERC_721",
        estValue: 644.02,
        lastValue: 85.0,
        rarity: "1st/10,000",
        imgUrl:
          "https://web.zapper.fi/images/?url=https%3A%2F%2Fstorage.googleapis.com%2Fzapper-fi-assets%2Fnfts%2Fmedias%2Fa5b2ae128ef25ef6afb48331cc9c87b9ffe3e0764a3d69d39688a238f4a7260a.png&width=500&checksum=92707",
        history: [
          {
            id: "h1",
            name: "0x1da5...4170",
            ownedAt: "June 2,2020",
            ownBy: "Transfer",
            ownedDuration: "30 months",
          },
          {
            id: "h2",
            name: "seedphrase.eth",
            ownedAt: "May 20,2020",
            ownBy: "Bought for 85 ETH",
            ownedDuration: "13 days",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Vahalla",
    logoUrl:
      "https://i.seadn.io/gcs/files/d7936464d55988206c1b16c6929856f6.jpg?w=1280&auto=format",
    holders: "3,652",
    floorPrice: 55.78,
    volume: "410.5",
    marketCap: "3.3K",
    supply: 9.09,
    desc: "CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s 	of London, Art|Basel Miami, and The PBS NewsHour.",
    network: "Ethereum",
    traits: [
      {
        id: 1,
        title: "Accessory",
        properties: [
          {
            id: "a1",
            title: "3 attributes",
            quantity: "25%",
          },
          {
            id: "a2",
            title: "Earrings",
            quantity: "25%",
          },
          {
            id: "a3",
            title: "2 attributes",
            quantity: "21%",
          },
        ],
      },
      {
        id: 2,
        title: "Type",
        properties: [
          {
            id: "t1",
            title: "Male",
            quantity: "60%",
          },
          {
            id: "t2",
            title: "Female",
            quantity: "38%",
          },
          {
            id: "t3",
            title: "Zoombie",
            quantity: "0.88%",
          },
        ],
      },
    ],
    collection: [
      {
        id: "8348",
        address: "0xb47e...3bbb",
        network: "Ethereum",
        standard: "ERC_721",
        estValue: 644.02,
        lastValue: 85.0,
        rarity: "1st/10,000",
        imgUrl:
          "https://web.zapper.fi/images/?url=https%3A%2F%2Fstorage.googleapis.com%2Fzapper-fi-assets%2Fnfts%2Fmedias%2Fa5b2ae128ef25ef6afb48331cc9c87b9ffe3e0764a3d69d39688a238f4a7260a.png&width=500&checksum=92707",
        history: [
          {
            id: "h1",
            name: "0x1da5...4170",
            ownedAt: "June 2,2020",
            ownBy: "Transfer",
            ownedDuration: "30 months",
          },
          {
            id: "h2",
            name: "seedphrase.eth",
            ownedAt: "May 20,2020",
            ownBy: "Bought for 85 ETH",
            ownedDuration: "13 days",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Vahalla",
    logoUrl:
      "https://i.seadn.io/gcs/files/d7936464d55988206c1b16c6929856f6.jpg?w=1280&auto=format",
    holders: "3,652",
    floorPrice: 55.78,
    volume: "410.5",
    marketCap: "3.3K",
    supply: 9.09,
    desc: "CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s 	of London, Art|Basel Miami, and The PBS NewsHour.",
    network: "Ethereum",
    traits: [
      {
        id: 1,
        title: "Accessory",
        properties: [
          {
            id: "a1",
            title: "3 attributes",
            quantity: "25%",
          },
          {
            id: "a2",
            title: "Earrings",
            quantity: "25%",
          },
          {
            id: "a3",
            title: "2 attributes",
            quantity: "21%",
          },
        ],
      },
      {
        id: 2,
        title: "Type",
        properties: [
          {
            id: "t1",
            title: "Male",
            quantity: "60%",
          },
          {
            id: "t2",
            title: "Female",
            quantity: "38%",
          },
          {
            id: "t3",
            title: "Zoombie",
            quantity: "0.88%",
          },
        ],
      },
    ],
    collection: [
      {
        id: "8348",
        address: "0xb47e...3bbb",
        network: "Ethereum",
        standard: "ERC_721",
        estValue: 644.02,
        lastValue: 85.0,
        rarity: "1st/10,000",
        imgUrl:
          "https://web.zapper.fi/images/?url=https%3A%2F%2Fstorage.googleapis.com%2Fzapper-fi-assets%2Fnfts%2Fmedias%2Fa5b2ae128ef25ef6afb48331cc9c87b9ffe3e0764a3d69d39688a238f4a7260a.png&width=500&checksum=92707",
        history: [
          {
            id: "h1",
            name: "0x1da5...4170",
            ownedAt: "June 2,2020",
            ownBy: "Transfer",
            ownedDuration: "30 months",
          },
          {
            id: "h2",
            name: "seedphrase.eth",
            ownedAt: "May 20,2020",
            ownBy: "Bought for 85 ETH",
            ownedDuration: "13 days",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Vahalla",
    logoUrl:
      "https://i.seadn.io/gcs/files/d7936464d55988206c1b16c6929856f6.jpg?w=1280&auto=format",
    holders: "3,652",
    floorPrice: 55.78,
    volume: "410.5",
    marketCap: "3.3K",
    supply: 9.09,
    desc: "CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s 	of London, Art|Basel Miami, and The PBS NewsHour.",
    network: "Ethereum",
    traits: [
      {
        id: 1,
        title: "Accessory",
        properties: [
          {
            id: "a1",
            title: "3 attributes",
            quantity: "25%",
          },
          {
            id: "a2",
            title: "Earrings",
            quantity: "25%",
          },
          {
            id: "a3",
            title: "2 attributes",
            quantity: "21%",
          },
        ],
      },
      {
        id: 2,
        title: "Type",
        properties: [
          {
            id: "t1",
            title: "Male",
            quantity: "60%",
          },
          {
            id: "t2",
            title: "Female",
            quantity: "38%",
          },
          {
            id: "t3",
            title: "Zoombie",
            quantity: "0.88%",
          },
        ],
      },
    ],
    collection: [
      {
        id: "8348",
        address: "0xb47e...3bbb",
        network: "Ethereum",
        standard: "ERC_721",
        estValue: 644.02,
        lastValue: 85.0,
        rarity: "1st/10,000",
        imgUrl:
          "https://web.zapper.fi/images/?url=https%3A%2F%2Fstorage.googleapis.com%2Fzapper-fi-assets%2Fnfts%2Fmedias%2Fa5b2ae128ef25ef6afb48331cc9c87b9ffe3e0764a3d69d39688a238f4a7260a.png&width=500&checksum=92707",
        history: [
          {
            id: "h1",
            name: "0x1da5...4170",
            ownedAt: "June 2,2020",
            ownBy: "Transfer",
            ownedDuration: "30 months",
          },
          {
            id: "h2",
            name: "seedphrase.eth",
            ownedAt: "May 20,2020",
            ownBy: "Bought for 85 ETH",
            ownedDuration: "13 days",
          },
        ],
      },
    ],
  },
];
