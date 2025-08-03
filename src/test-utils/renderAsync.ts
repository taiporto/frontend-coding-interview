// https://aurorascharff.no/posts/running-tests-with-rtl-and-vitest-on-internationalized-react-server-components-in-nextjs-app-router/
/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSX } from 'react';
import { act, render } from '@testing-library/react';

// Return true if the supplied value is an async function; otherwise, return
// false
function isAsyncFunction(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object AsyncFunction]';
}

// Retrieve the nearest (i.e. outermost) client component in the component tree
// represented by the given JSX node
async function getNearestClientComponent(node: JSX.Element) {
  if (!isAsyncFunction(node.type)) {
    return node;
  }
  const nodeReturnValue = await node.type({ ...node.props });
  return getNearestClientComponent(nodeReturnValue);
}

// Follow <https://github.com/testing-library/react-testing-library/issues/1209>
// for the latest updates on React Testing Library support for React Server
// Components (RSC)
export async function renderAsync(node: JSX.Element) {
  await act(async () => {
    render(await getNearestClientComponent(node));
  });
}