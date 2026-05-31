{
  "$schema": "notes-graph-schema.json",
  "nodes": [
    {
      "id": "zettelkasten",
      "title": "There and Back Again",
      "url": "index.html",
      "tags": ["root", "zettelkasten"],
      "description": "The research journal and Zettelkasten for Eigenscribe Inc."
    },
    {
      "id": "subsec-methodology",
      "title": "First-Principles Framework",
      "url": "subsec-methodology.html",
      "tags": ["methodology", "framework", "foundations"],
      "description": "Core reasoning principles for the journal."
    },
    {
      "id": "pt-scribing",
      "title": "Scribing",
      "url": "pt-scribing.html",
      "tags": ["workflow", "writing", "notes"],
      "description": "Scribing practices and note-taking workflows."
    },
    {
      "id": "pt-practice-problems",
      "title": "Practice Problems",
      "url": "pt-practice-problems.html",
      "tags": ["practice", "problems"],
      "description": "Practice problems and exercises for learning."
    },
    {
      "id": "ch-quantum-computing-practice-sets",
      "title": "Quantum Computing Practice Sets",
      "url": "ch-quantum-computing-practice-sets.html",
      "tags": ["quantum", "practice"],
      "description": "Quantum computing exercises and applied problems."
    },
    {
      "id": "sec-qc-practice-set-1",
      "title": "Intro to Quantum Computing with Qiskit",
      "url": "sec-qc-practice-set-1.html",
      "tags": ["quantum", "Qiskit", "tensor-products"],
      "description": "A hands-on first practice set for quantum programming."
    },
    {
      "id": "pt-meta",
      "title": "Meta",
      "url": "pt-meta.html",
      "tags": ["meta", "structure", "tooling"],
      "description": "Meta-level notes about structure, tools, and workflow."
    },
    {
      "id": "ch-cheat-sheets",
      "title": "Cheat Sheets",
      "url": "ch-cheat-sheets.html",
      "tags": ["cheat-sheets", "reference"],
      "description": "Compact reference sheets for key concepts."
    },
    {
      "id": "backmatter",
      "title": "Backmatter",
      "url": "backmatter.html",
      "tags": ["reference", "appendix"],
      "description": "Supplementary reference material and appendices."
    },
    {
      "id": "gls-main",
      "title": "Glossary",
      "url": "gls-main.html",
      "tags": ["glossary", "definitions"],
      "description": "Glossary of terms used throughout the journal."
    },
    {
      "id": "gls-poisson-brackets",
      "title": "Poisson Bracket",
      "url": "gls-poisson-brackets.html",
      "tags": ["poisson", "mechanics"],
      "description": "Definition and properties of the Poisson bracket."
    },
    {
      "id": "appendix-mathematical-foundations",
      "title": "Mathematical Foundations",
      "url": "appendix-mathematical-foundations.html",
      "tags": ["appendix", "math", "reference"],
      "description": "Mathematical reference appendix for formulas and definitions."
    },
    {
      "id": "appendix-bibliography",
      "title": "Bibliography",
      "url": "appendix-bibliography.html",
      "tags": ["appendix", "bibliography"],
      "description": "Cited sources and bibliographic references."
    }
  ],
  "links": [
    {
      "source": "zettelkasten",
      "target": "subsec-methodology",
      "type": "builds-on"
    },
    {
      "source": "zettelkasten",
      "target": "pt-scribing",
      "type": "builds-on"
    },
    {
      "source": "zettelkasten",
      "target": "pt-practice-problems",
      "type": "builds-on"
    },
    {
      "source": "zettelkasten",
      "target": "pt-meta",
      "type": "builds-on"
    },
    {
      "source": "zettelkasten",
      "target": "backmatter",
      "type": "builds-on"
    },
    {
      "source": "subsec-methodology",
      "target": "gls-main",
      "type": "reference"
    },
    {
      "source": "subsec-methodology",
      "target": "appendix-mathematical-foundations",
      "type": "reference"
    },
    {
      "source": "pt-practice-problems",
      "target": "ch-quantum-computing-practice-sets",
      "type": "builds-on"
    },
    {
      "source": "ch-quantum-computing-practice-sets",
      "target": "sec-qc-practice-set-1",
      "type": "builds-on"
    },
    {
      "source": "pt-meta",
      "target": "ch-cheat-sheets",
      "type": "builds-on"
    },
    {
      "source": "backmatter",
      "target": "gls-main",
      "type": "related"
    },
    {
      "source": "backmatter",
      "target": "appendix-mathematical-foundations",
      "type": "related"
    },
    {
      "source": "backmatter",
      "target": "appendix-bibliography",
      "type": "related"
    },
    {
      "source": "gls-main",
      "target": "gls-poisson-brackets",
      "type": "builds-on"
    },
    {
      "source": "gls-poisson-brackets",
      "target": "appendix-mathematical-foundations",
      "type": "related"
    },
    {
      "source": "gls-poisson-brackets",
      "target": "subsec-methodology",
      "type": "related"
    }
  ]
}
