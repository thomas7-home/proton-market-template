const localizationJson: LocalizationText = {
  en: {
    header: {
      highlightText: 'E X C L U S I V E',
      headerLine1: 'PIXEL HEROES',
      headerLine2: 'COLLECTIBLE TRADING CARD NFTS',
      description:
        'Fun, collectible, trading cards with personality!',
      buttonText: 'Collect now!',
    },
    navbar: {
      navLinks: ['MERH', 'GET PIXEL', 'MY ITEMS'],
      balanceText: 'Balance',
      loginText: 'Connect Wallet',
    },
    detailPage: {
      priceLabelText: 'PRICE',
      editionLabelText: 'EDITION SIZE',
      placeholderPriceText: 'NOT FOR SALE',
      placeholderDropdownText: 'NO ASSETS',
      buyButtonText: 'BUY NOW',
      viewButtonText: 'VIEW ON PROTON MARKET',
      sellButtonText: 'SELL ON PROTON MARKET',
      cancelSaleButtonText: 'CANCEL SALE ON PROTON MARKET',
    },
    nftCard: {
      nftsLeft: 'LEFT',
      nftsOwnedForSale: 'FOR SALE',
      soldOut: 'SOLD OUT',
    },
    featuredSection: {
      heading: 'Collect Now!',
    },
    myItemsPage: {
      header: 'MY ITEMS',
    },
  },
};

export interface HeaderTextProps {
  highlightText: string;
  headerLine1: string;
  headerLine2: string;
  description: string;
  buttonText: string;
}

export interface NftCardTextProps {
  nftsLeft: string;
  nftsOwnedForSale: string;
  soldOut: string;
}

export interface NavbarTextProps {
  navLinks: string[];
  balanceText: string;
  loginText: string;
}

export interface FeaturedSectionTextProps {
  heading: string;
}

export interface DetailPageTextProps {
  priceLabelText: string;
  editionLabelText: string;
  placeholderPriceText: string;
  placeholderDropdownText: string;
  buyButtonText: string;
  viewButtonText: string;
  sellButtonText: string;
  cancelSaleButtonText: string;
}

export interface Text {
  header: HeaderTextProps;
  navbar: NavbarTextProps;
  detailPage: DetailPageTextProps;
  nftCard: NftCardTextProps;
  featuredSection: FeaturedSectionTextProps;
  myItemsPage: {
    header: string;
  };
}

interface LocalizationText {
  [language: string]: Text;
}

export default localizationJson;
