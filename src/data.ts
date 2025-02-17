const map: Record<string, string> = {
  "O(1)": "best",
  "O(Log N)": "good",
  "O(N)": "average",
  "O(N Log N)": "meh",
  "O(N2)": "bad",
  "O(N!)": "worst",
};

export function defineComplexityStyles(type: string): string {
  return map[type];
}

export const data = [
  {
    type: "Type",
    access: "Access",
    search: "Search",
    insertion: "Isertion",
    deletion: "Deletion",
  },
  {
    type: "Array",
    access: "O(1)",
    search: "O(N)",
    insertion: "O(N)",
    deletion: "O(N)",
  },
  {
    type: "Stack",
    access: "O(N)",
    search: "O(N)",
    insertion: "O(1)",
    deletion: "O(1)",
  },
  {
    type: "Queue",
    access: "O(N)",
    search: "O(N)",
    insertion: "O(1)",
    deletion: "O(1)",
  },
  {
    type: "Linked list",
    access: "O(N)",
    search: "O(N)",
    insertion: "O(1)",
    deletion: "O(1)",
  },
  {
    type: "Hash Table",
    access: "O(1)",
    search: "O(1)",
    insertion: "O(1)",
    deletion: "O(1)",
  },
  {
    type: "Search tree",
    access: "O(Log N)",
    search: "O(Log N)",
    insertion: "O(Log N)",
    deletion: "O(Log N)",
  },
];
