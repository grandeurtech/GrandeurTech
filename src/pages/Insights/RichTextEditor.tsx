import {
  EditorContent,
  useEditor,
} from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const RichTextEditor = ({
  value,
  onChange,
}: Props) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const buttonClass = (
    active: boolean
  ) =>
    `rounded-lg border px-3 py-2 text-sm font-semibold transition ${
      active
        ? "bg-primary text-white"
        : "bg-white text-primary-foreground"
    }`;

  return (
    <div className="overflow-hidden rounded-xl border border-black/10">
      <div className="flex flex-wrap gap-2 border-b border-black/10 bg-gray-50 p-3">
        <button
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={buttonClass(
            editor.isActive("bold")
          )}
        >
          Bold
        </button>

        <button
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={buttonClass(
            editor.isActive("italic")
          )}
        >
          Italic
        </button>

        <button
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={buttonClass(
            editor.isActive("strike")
          )}
        >
          Strike
        </button>

        <button
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({
                level: 2,
              })
              .run()
          }
          className={buttonClass(
            editor.isActive("heading", {
              level: 2,
            })
          )}
        >
          H2
        </button>

        <button
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({
                level: 3,
              })
              .run()
          }
          className={buttonClass(
            editor.isActive("heading", {
              level: 3,
            })
          )}
        >
          H3
        </button>

        <button
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleBulletList()
              .run()
          }
          className={buttonClass(
            editor.isActive("bulletList")
          )}
        >
          Bullets
        </button>

        <button
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleOrderedList()
              .run()
          }
          className={buttonClass(
            editor.isActive("orderedList")
          )}
        >
          Numbered
        </button>

        <button
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleBlockquote()
              .run()
          }
          className={buttonClass(
            editor.isActive("blockquote")
          )}
        >
          Quote
        </button>

        <button
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .undo()
              .run()
          }
          disabled={!editor.can().undo()}
          className="rounded-lg border px-3 py-2 text-sm font-semibold disabled:opacity-40"
        >
          Undo
        </button>

        <button
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .redo()
              .run()
          }
          disabled={!editor.can().redo()}
          className="rounded-lg border px-3 py-2 text-sm font-semibold disabled:opacity-40"
        >
          Redo
        </button>
      </div>

      <EditorContent
        editor={editor}
        className="
          min-h-72 p-5
          [&_.ProseMirror]:min-h-64
          [&_.ProseMirror]:outline-none
          [&_.ProseMirror_h2]:mb-3
          [&_.ProseMirror_h2]:mt-5
          [&_.ProseMirror_h2]:text-2xl
          [&_.ProseMirror_h2]:font-bold
          [&_.ProseMirror_h3]:mb-3
          [&_.ProseMirror_h3]:mt-5
          [&_.ProseMirror_h3]:text-xl
          [&_.ProseMirror_h3]:font-bold
          [&_.ProseMirror_p]:mb-4
          [&_.ProseMirror_ul]:list-disc
          [&_.ProseMirror_ul]:pl-6
          [&_.ProseMirror_ol]:list-decimal
          [&_.ProseMirror_ol]:pl-6
          [&_.ProseMirror_blockquote]:border-l-4
          [&_.ProseMirror_blockquote]:border-primary
          [&_.ProseMirror_blockquote]:pl-4
          [&_.ProseMirror_blockquote]:italic
        "
      />
    </div>
  );
};

export default RichTextEditor;