export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a28e0eb9c88f0f683b30df",
                  title: "Sanity Studio",
                  name: "nouvel-technologies-studio",
                  apiId: "93a6b15d-fdc8-4539-af07-887c79c5fe67",
                },
                {
                  buildHookId: "60a28e0d8372280dd7d30bf1",
                  title: "Blog Website",
                  name: "breakthrough-technologies",
                  apiId: "e7eb4e51-5792-4df2-9972-2fb221270725",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hamletavetisian/breakthrough-technologies",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://breakthrough-technologies.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
