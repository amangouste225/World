type Props = {
  children: React.ReactNode;
};

function AppLayout({ children }: Props) {
  return <div>{children}</div>;
}

export default AppLayout;
