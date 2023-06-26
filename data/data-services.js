import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faFile, faDiamond } from "@fortawesome/free-solid-svg-icons";

const DataDummyServices = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon
        icon={faCode}
        style={{ fontSize: 60, color: "#efa8b0" }}
      />
    ),
    title: "Ipsum consequat",
    description:
      "Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.",
  },
  {
    id: 2,
    icon: (
      <FontAwesomeIcon
        icon={faFile}
        style={{ fontSize: 60, color: "#a89cc8" }}
      />
    ),
    title: "Ipsum consequat",
    description:
      "Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.",
  },
  {
    id: 3,
    icon: (
      <FontAwesomeIcon
        icon={faDiamond}
        style={{ fontSize: 60, color: "#8cc9f0" }}
      />
    ),
    title: "Ipsum consequat",
    description:
      "Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.",
  },
];

export default DataDummyServices;
