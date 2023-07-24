const AuthLayout=({
    children
}:{
    children:React.ReactNode;
})=>{
    return(
        <div className="flex items-centre  bg-[#111827] justify-center h-full">
            {children}
        </div>
    )
}

export default AuthLayout;