using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [EnableCors("CorsPolicy")]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext _context;
        public ProductsController(StoreContext context)
        {
            _context = context;
            
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts() 
        {
            return await _context.Products.ToListAsync();
            
        }

        [HttpGet("{id}")]
         // api/products/id
        public async Task<ActionResult<Product>> GetProduct(int id) 
        {
            var product = await _context.Products.FindAsync(id);
            
            return Ok(product);
        }
    }
}