const CalendarIcon = () => {
  return (
    <svg width={20} height={20}>
      <path d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"></path>
    </svg>
  );
};

const TagIcon = (id_) => {
  return (
    <svg className="svg" height="20" width="20" id={id_}>
      <path
        id={id_}
        d="M13.4 12l3.5-3.5-1.4-1.4-3.5 3.5-3.5-3.5-1.4 1.4 3.5 3.5-3.5 3.5 1.4 1.4 3.5-3.5 3.5 3.5 1.4-1.4z"
      ></path>
    </svg>
  );
};

const BasicinfoIcon = () => {
  return (
    <svg
      width={50}
      height={50}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      color=""
      style={{
        filter:
          "invert(93%) sepia(8%) saturate(158%) hue-rotate(207deg) brightness(95%) contrast(90%)",
      }}
    >
      <path d="M2 2v3h1V3h5v10H6v1h5v-1H9V3h5v2h1V2H2z" />
      <path d="M15 9h7v1h-7zM15 13h7v1h-7zM6 17h16v1H6zM6 21h16v1H6z" />
    </svg>
  );
};

const LocationIcon = () => {
  return (
    <svg
      width={50}
      height={50}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      color=""
      style={{
        filter:
          "invert(93%) sepia(8%) saturate(158%) hue-rotate(207deg) brightness(95%) contrast(90%)",
      }}
    >
      <path d="M20 3c-1.1 0-2 .9-2 2H2v16h17.8c1.1 0 2.1-.9 2.1-2V5c.1-1.1-.8-2-1.9-2zm-.2 17H3V6h15v13h1c0-.6.4-1 1-1 .5 0 .9.4 1 .9-.1.6-.6 1.1-1.2 1.1zm1.2-2.7c-.3-.2-.6-.3-1-.3s-.7.1-1 .3V5c0-.6.4-1 1-1s1 .4 1 1v12.3z"></path>
      <path d="M8.8 12.7l.7-.7-1.1-1 1.1-1-.7-.7-1.1 1-1-1-.7.7 1 1-1 1 .7.7 1-1z"></path>
      <path d="M12 10h2v1h-2z"></path>
      <path d="M15 12h1v2h-1z"></path>
      <path d="M12 15h2v1h-2z"></path>
      <path d="M8 15h2v1H8z"></path>
    </svg>
  );
};

const DateandTimeIcon = () => {
  return (
    <svg
      width={50}
      height={50}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      color=""
      style={{
        filter:
          "invert(93%) sepia(8%) saturate(158%) hue-rotate(207deg) brightness(95%) contrast(90%)",
      }}
    >
      <path d="M17 4V2h-1v2H8V2H7v2H2v18h20V4h-5zm4 17H3V9h18v12zM3 8V5h4v1h1V5h8v1h1V5h4v3H3z"></path>
      <g id="calendar_svg__eds-icon--calendar_squares">
        <path d="M15 16h2v2h-2zM11 16h2v2h-2zM7 16h2v2H7zM15 12h2v2h-2zM11 12h2v2h-2zM7 12h2v2H7z"></path>
      </g>
    </svg>
  );
};

const HashIcon = () => {
  return (
    <svg
      width={18}
      height={18}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path d="M6.7 20h1.1l1.1-4.8h4.9L12.6 20h1.1l1.1-4.8H18v-.9h-3l1-4.5h3v-1h-2.8L17.3 4h-1.1l-1.1 4.8h-4.9L11.4 4h-1.1L9.2 8.8H6v.9h3l-1 4.5H5v.9h2.8L6.7 20zM9 14.2l1-4.5h5l-1 4.5H9z"></path>
    </svg>
  );
};

const EventMedia = () => {
  return (
    <svg viewBox="0 0 24 24"
      height={50}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 20h20V4H2v16zm1-1h18V5H3v14z"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 7C15.1 7 14 8.1 14 9.5s1.1 2.5 2.5 2.5S19 10.9 19 9.5 17.9 7 16.5 7zm0 4c-.8 0-1.5-.7-1.5-1.5S15.7 8 16.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.5 13l-.7.8-3.5-3.8-6.4 7H19.1l-3.6-4zm-8.3 3l4.1-4.4 2.7 3 .7.8.7-.8 1.4 1.5H7.2z"
      ></path>
    </svg>
  );
};

export {
  CalendarIcon,
  TagIcon,
  BasicinfoIcon,
  LocationIcon,
  DateandTimeIcon,
  HashIcon,
  EventMedia,
};
