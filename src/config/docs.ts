import type { DocsConfig } from "@/types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs/getting-started/",
    },
    {
      title: "Guides",
      href: "/guides/",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/getting-started/",
        }
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Installation",
          href: "/docs/installation/",
        },
        {
          title: "Usage",
          href: "/docs/usage/",
        }
      ],
    },
    {
      title: "API",
      items: [
        {
          title: "Options",
          href: "/docs/options/",
        },
        {
          title: "Methods",
          href: "/docs/methods/",
        },
        {
          title: "Events",
          href: "/docs/events/",
        }
      ],
    },
    {
      title: "Plugins",
      items: [
        {
          title: "Introduction",
          href: "/docs/plugins/introduction/",
        },
        {
          title: "Creating plugins",
          href: "/docs/plugins/create/",
        },
        {
          title: "Image",
          href: "/docs/plugins/image/",
        },
        {
          title: "Video",
          href: "/docs/plugins/video/",
        },
        {
          title: "Iframe",
          href: "/docs/plugins/iframe/",
        },
        {
          title: "Inline content",
          href: "/docs/plugins/inline/",
        },
        {
          title: "Keyboard Navigation",
          href: "/docs/plugins/keyboard/",
          // disabled: true,
        },
        {
          title: "Drag Navigation",
          href: "/docs/plugins/drag/",
          // disabled: true,
        },
        {
          title: "Themes",
          href: "/docs/plugins/themes/",
        },
      ],
    },
    {
      title: "License",
      items: [
        {
          title: "Open Source License",
          href: "/docs/license-open-souce/",
        },
        {
          title: "Commercial License",
          href: "/docs/license-commercial/",
        },
      ],
    }
  ]
}