

export const pageview = (url: string) => {
    // Client-side-only code
    window.gtag("config", "G-7K3LGJP9W3", {
      page_path: url,
    });
};

// log specific events happening.
export const event = ({ action, params }: { action: any; params: any }) => {
    window.gtag("event", action, params);
};
