const theme = {
  titleSuffix: " | The Dom",
  search: true,
  unstable_flexsearch: true,
  unstable_staticImage: true,
  floatTOC: true,
  font: false,
  github: "https://github.com/bonface221/the-dom",
  projectLink: "https://github.com/bonface221/the-dom",
  logo: () => (
    <>
      <img
        src="/logo.svg"
        height="25"
        width="25"
        style={{ marginRight: "1em" }}
      />
      <h1>
        JavaScript <span style={{ opacity: 0.2 }}></span>
      </h1>
    </>
  ),
  head: function Head(props) {
    return (
      <>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/javascript.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/javascript.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/javascript.svg"
        />
        <link rel="mask-icon" href="/javascript.svg" color="#000000" />
        <link rel="shortcut icon" href="/javascript.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="description"
          content="Website created for the a talk of javascript and the Dom by bonface221"
        />
        <meta
          name="description"
          content="Website for the a talk of javascript and the Dom by bonface221"
        />
        <meta name="author" content="Bonface221" />
        <meta
          property="og:url"
          content="" //come and update this later
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="692" />
        <meta
          property="og:title"
          content={`${props.title} | JavaScript The Dom`}
        />
        <meta
          property="og:description"
          content="Website created for the a talk of javascript and the Dom by bonface221"
        />
        <meta
          property="og:image"
          content="" //come and update this
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@twinbro10" />
        <meta name="twitter:creator" content="@twinbro10" />
      </>
    );
  },
  darkMode: true,
  footerText: `${new Date().getFullYear()} © bonface221`,
  nextThemes: {
    defaultTheme: "dark",
  },
};
export default theme;
