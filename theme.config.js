import { useRouter } from "next/router";

const theme = {
  titleSuffix: " | bonface221",
  search: true,
  unstable_flexsearch: true,
  unstable_staticImage: true,
  floatTOC: true,
  font: false,
  github: "https://github.com/bonface221/the-dom",
  projectLink: "https://github.com/bonface221/the-dom",

  logo: () => {
    const { route } = useRouter();
    switch (route) {
      case "/android":
        return (
          <>
            <img
              src="/android.png"
              height="55"
              width="55"
              style={{ marginRight: "1em" }}
            />
            <h1>
              Android <span style={{ opacity: 0.2 }}></span>
            </h1>
          </>
        );
      default:
        return (
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
        );
    }
  },

  head: function Head(props) {
    const { route } = useRouter();
    return (
      <>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/javascript.svg" />
        {route === "/android" ? (
          <link rel="icon" type="image/png" sizes="32x32" href="/android.png" />
        ) : (
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/javascript.svg"
          />
        )}

        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="description"
          content="Website created for different meetup talks by bonface221"
        />
        <meta
          name="description"
          content="Website created for different meetup talks by bonface221"
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
        <meta property="og:title" content={`${props.title} | bonface221`} />
        <meta
          property="og:description"
          content="Website created for the various meetup talks by bonface221"
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
