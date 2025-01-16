using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Enable serving static files from the wwwroot folder
app.UseDefaultFiles(); // Enables serving index.html as the default file
app.UseStaticFiles();  // Enables serving static files like CSS, JS, images, etc.

// Start the app
app.Run();