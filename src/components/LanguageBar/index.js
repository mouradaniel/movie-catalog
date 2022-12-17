import React, { useContext } from 'react';

import SearchContext from '../../context/Search';

import { useTranslation } from "react-i18next";

import {
  Container,
  Content,
  Button,
  Flag
} from './styles';

import unitedStates from '../../assets/icons/united-states.svg';
import flagBrazil from '../../assets/icons/brazil.svg';

export function LanguageBar() {
  const { setLanguage } = useContext(SearchContext);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  return (
    <Container>
      <Content>
        <Button onClick={() => changeLanguage("pt")}>
          <Flag src={flagBrazil} alt={t("flag-brazil")} title={t("flag-brazil")} active={i18n.language === "pt"} />
        </Button>
        <Button onClick={() => changeLanguage("en")}>
          <Flag src={unitedStates} alt={t("flag-united-states")} title={t("flag-united-states")} active={i18n.language === "en"} />
        </Button>
      </Content>
    </Container>
  )
}