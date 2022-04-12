import { IntlShape } from "react-intl";
import ReactCountryFlag from "react-country-flag";

import { DropdownItem } from "../DropDown/dropdownTypes";

const sizeCountryFlag = {
  width: "1rem",
  height: "1rem",
};

export const intlDropdown: (
  intl: IntlShape,
  changeLanguage: (value: string) => void
) => DropdownItem[] = (intl, changeLanguage) => [
  {
    title: intl.formatMessage({ id: "ENGLISH" }),
    onClick: () => changeLanguage("en-US"),
    icon: (
      <ReactCountryFlag
        countryCode="US"
        svg
        style={sizeCountryFlag}
        title="US"
      />
    ),
  },
  {
    title: intl.formatMessage({ id: "SPANISH" }),
    onClick: () => changeLanguage("es-ES"),
    icon: (
      <ReactCountryFlag
        countryCode="ES"
        svg
        style={sizeCountryFlag}
        title="ES"
      />
    ),
  },
  {
    title: intl.formatMessage({ id: "PORTUGUESE" }),
    onClick: () => changeLanguage("pt-BR"),
    icon: (
      <ReactCountryFlag
        countryCode="BR"
        svg
        style={sizeCountryFlag}
        title="BR"
      />
    ),
  },
];
