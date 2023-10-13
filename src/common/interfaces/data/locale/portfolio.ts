export interface IPortfolioDictionary {
  banner: {
    title: string;
    subtitle: string;
    text: string;
    orderServiceBtn: string;
  };
  portfolio: {
    navigation: {
      ['Single page sites']: string;
      ['Corporate sites']: string;
      ['Internet stores']: string;
      ['Web applications']: string;
    };
    showMoreBtn: string;
  };
}
