export const renderMicrofrontend = (Microfrontend) => {
  return (
    <React.Suspense fallback="Loading...">
      <Microfrontend />
    </React.Suspense>
  );
};
