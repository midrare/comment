import * as engine      from '..';
import * as skeleton    from './skeleton';
import * as constants   from '../constants';

// ─── Generate Line Comment ─────────────────────────────────────────────── ✣ ─

export const generateLineComment = skeleton.createCommentGenerationSkeleton({
  contextVerifier:    verifier,
  commentGenerator:   generator,
});

// ─── Verifier ──────────────────────────────────────────────────────────── ✣ ─

function verifier(context: engine.concepts.Context): null {
  return null;
}

// ─── Generator ─────────────────────────────────────────────────────────── ✣ ─

function generator(context: engine.concepts.Context): string {
  return(
    // Line
    constants.COMMENT_LINE_CHARACTER.repeat(context.commentBodyAvailableSpace) +
    // Ornament
    context.ornament.render(context.indentation)
  );
}