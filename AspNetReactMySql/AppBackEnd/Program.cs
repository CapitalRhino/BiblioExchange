using AppBackEnd.Controllers;
using AppBackEnd.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
string MyOrginsPolicy = "CORSPolicy";
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options=>
    options.AddPolicy(MyOrginsPolicy,
        builders=>
        {
            builders.AllowAnyMethod().AllowAnyHeader()
            // .AllowAnyOrigin();
            .WithOrigins(
            "http://localhost:3000","http://192.168.1.4:3000");
        }
));

builder.Services.AddDbContextPool<AppDbContext>(options =>
        {
            var connetionString = builder.Configuration.GetConnectionString("DefaultConnection");
            options.UseMySql(connetionString, ServerVersion.AutoDetect(connetionString));
        });
builder.Services.AddIdentity<IdentityUser, IdentityRole>(options =>
{
    options.Password.RequireDigit = false;
    options.Password.RequireLowercase = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = false;
    options.Password.RequiredLength = 3;
    options.Password.RequiredUniqueChars = 0; //може всички знаци да се повтарят
}).AddEntityFrameworkStores<AppDbContext>().AddDefaultTokenProviders();
// Add services to the container
builder.Services.AddControllers();


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(swaggerGenOptions=>{
    swaggerGenOptions.SwaggerDoc("v1",new OpenApiInfo{Title = "Asp.Net React MySQl",Version="v1"});
});
builder.Services.AddDbContext<AppDbContext>();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI(swaggerUIOptions=>
{
    swaggerUIOptions.DocumentTitle = "ASP.NET React MySQL";
    swaggerUIOptions.SwaggerEndpoint("swagger/v1/swagger.json","Web Api for books");
    swaggerUIOptions.RoutePrefix= string.Empty;
});
app.UseRouting();
app.UseHttpsRedirection();
app.UseAuthorization();
app.UseCors(MyOrginsPolicy);
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action}/{id?}");

app.Run();
