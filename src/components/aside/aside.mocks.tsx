import { Heading } from "../heading";

export function createAsidePropsMock() {
  return {
    children: (
      <>
        <Heading level={4}>Sketching execution flows</Heading>

        <p>
          Observe that we don&apos;t have to cover the flows exhaustively, nor
          do we have to limit our coverage. We can cover just the parts of code
          that we are concerned with, based on our current goal, e.g. to solve
          the current bug or to learn more about a specific part of the
          code-base. We can make a kind of &quot;partial sketch&quot; of the
          parts of the execution flows that interest us.
        </p>
        <p>
          For example, we don&apos;t cover how <code>login</code> and
          <code>register</code> are called, and we don&apos;t cover which
          further calls are made by <code>UserAuthProvider</code>,
          <code>SessionProvider</code> or <code>Response</code>, if those parts
          of the code don&apos;t interest us.
        </p>
        <p>
          And if we are dealing with a bug in which <code>isValidUser</code>
          incorrectly returns <code>false</code>, we can focus more on
          <code>isValidUser</code> and which methods it calls.
        </p>
      </>
    ),
  };
}
