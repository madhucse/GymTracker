using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace BusinessLogic.Tests
{
    [TestFixture]
    public class CategoryRepoTest
    {

        [Test]
        public void GetAllTest()
        {
            var obj = new CategoryRepo();
            int Expected =6;
            int Actual = obj.GetAll().Count();
            Assert.AreEqual(Expected, Actual);

        }

      
    }
}

