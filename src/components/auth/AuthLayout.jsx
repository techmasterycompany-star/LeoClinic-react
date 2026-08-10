function AuthLayout({
  children,
  leftImage = "/auth/login-right-panel.png",
}) {
  return (
    <div className="min-h-screen w-full flex bg-white">

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
        {children}
      </div>

      <div
        className="hidden lg:block lg:w-1/2 min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${leftImage}')`,
        }}
      />

    </div>
  );
}

export default AuthLayout;