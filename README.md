# Paircode

Answer dating questions, get a short code, post it. Anyone can compare their code with yours, question by question, and both people see the same result. Interface in Ukrainian, Polish and English.

Live: https://p4tient.github.io/paircode/

`index.html` (the app) and `questions.js` (the question list) do the work. Everything else is fonts, icons and offline support. No server, no build step, no accounts.

## Features

- **Quick version** of 10 questions, or all of them in packs. Every question can be skipped.
- **Several own answers** on questions where more than one can be true.
- **Compare one code**, question by question, or **paste a whole comment section** and rank every code in it.
- **First-date topics:** each comparison picks the three biggest differences to talk about.
- **Share a result** as text or as an image card. The card shows only the score, never the answers.
- **Copy a hot take as a post**, linked to your own code.
- **Suggest a question** from the footer (opens a pre-filled GitHub issue).
- **Install as an app** and use it offline.

## Privacy

- **Nothing is collected.** There is no backend. Answers stay in the browser until the person shares their code.
- **A code is public.** It is the answers in compressed form, and the format is documented below, so anyone can decode it. That's why every question can be skipped, skipping is the default, and the app shows the exact list of answers that will go into the code before creating it.
- **Links keep the code out of server logs.** The code sits after `#` in the link, and browsers never send that part to the server.
- **No third-party requests.** Fonts, icons and the QR library are served from this repository, so opening the page contacts nothing but GitHub Pages. The result image is drawn in the browser.

## Publish on GitHub Pages

1. Create a public repository, for example `paircode`.
2. Upload every file, keeping the `fonts` folder (Add file → Upload files).
3. Settings → Pages → Source: *Deploy from a branch*, Branch: `main`, folder `/ (root)` → Save.
4. After a minute the app is live at `https://<your-username>.github.io/paircode/`.
5. Set `REPO_URL` at the top of the script in `index.html`. The footer then links to `questions.js` and shows the "Suggest a question" button.

Opening `index.html` straight from your disk also works for testing (offline support only runs over https or localhost).

## Editing questions

Everything is in `questions.js`. The rules are written at the top of the file:

1. Never change or reuse an `id` (1–255).
2. To remove a question, set `retired: true`. Don't delete it.
3. 2–4 options. Add options only at the end, never reorder. If an option's meaning changes, make a new question with a new id.
4. Display order is file order. Move questions freely.
5. Wording and typo fixes are fine if the meaning stays the same.
6. Every language needs the same number of options.

Codes refer to question ids, not positions, so codes made before an edit keep working. The page checks `questions.js` on load and lists any mistakes at the top of the screen.

A question looks like this:

```js
{ id: 65, pack: "lifestyle", sensitive: false,
  text: { en: "Coffee or tea?", uk: "Кава чи чай?", pl: "Kawa czy herbata?" },
  options: {
    en: ["Coffee", "Tea", "Both", "Neither"],
    uk: ["Кава", "Чай", "Обидва", "Жодне"],
    pl: ["Kawa", "Herbata", "Obie", "Żadne"] } },
```

- `showIf: { id: 3, answer: 0 }` shows a question only when question 3 has option 0 picked.
- `options: "agree"` reuses a shared scale from `scales`; questions on that scale also get a "Copy as a post" button.
- `quick: true` puts a question in the quick version.
- `multi: true` lets people pick several of their own answers. Turning it on for an existing question doesn't break earlier codes.
- A pack can carry a one-line `note` shown at its top.

## Scoring

For each question both people answered, each person gets points when the other's answer is one they accept (with several answers picked, one acceptable answer is enough), weighted by importance: doesn't matter 0, a little 1, a lot 10, dealbreaker 100. The match is the geometric mean of both sides, so it is only high when it works for both. With fewer than 8 shared answers the app shows the breakdown but no percentage. Dealbreakers are always listed separately, including ones the other person skipped.

## Code format

```
v1: [1][N = highest answered id][bitmap of ids 1..N][1 byte per answered id][CRC-8]
    answer byte: bits 7-6 own option, bits 5-2 accepted partner options, bits 1-0 importance
v2: same, plus a bitmap over the answered ids marking answers with several own options;
    those take 2 bytes: (own options << 4 | importance), then accepted options
```

v2 is used only when someone actually picks several answers, so single-answer codes stay short and identical to v1.

The bytes are written in base62 (letters and digits only), so a long-press selects the whole code. About 27 characters for the quick version, about 90 for every question, up to about 105 with many multi-answers. The CRC catches a mistyped character 255 times out of 256.

## Settings

At the top of the script in `index.html`: `REPO_URL`, `SHARE_BASE` (fixed address for share links), `WEIGHTS`, `MIN_SHARED`. Interface text for all three languages is in the `UI` object below them. `sw.js` lists the files kept for offline use; bump its `CACHE` name when that list changes.

## License

Code: MIT, see `LICENSE`. Fonts (Onest, Unbounded, JetBrains Mono): SIL Open Font License 1.1, see `fonts/OFL.txt`. QR library (`qrcode.js`, Kazuhiko Arase): MIT, notice inside the file.
