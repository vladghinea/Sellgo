using El_Proyecte_Grande.Models;
using El_Proyecte_Grande.Repository;
using El_Proyecte_Grande.Services;
using Microsoft.EntityFrameworkCore;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;


namespace El_Proyecte_Grande_XUnit_Test
{
    public class ServicesClientTests
    {
        private readonly ServiceClient _systemUnderTest;
        private readonly Mock<IAppDbRepository> dbMock =
            new Mock<IAppDbRepository>();

        public ServicesClientTests()
        {
            _systemUnderTest = new ServiceClient(dbMock.Object);
        }

        [Fact]
        public async Task GetClientByIdAsync_ShouldReturnAClient_WithID_WhenClient_Exist()
        {
            //Arrange
            var clientID = 1;
            var clientDto = new Client()
            {
                Id = 1,
                FirstName = "John",
                LastName = "Doe",
                Email = "john.doe@mail.com",
                PhoneNumber = "040395782013",
                CompanyId = 1,
                DateOfBirth = DateTime.Now.AddDays(-12820),
                Position = "Manager",
                Gender = El_Proyecte_Grande.Utils.GenderTypes.Male,
                Address = " john address"


            };
            dbMock.Setup(x => x.GetClientByIdAsync(clientID)).ReturnsAsync(clientDto);
            //Act
            var client = await _systemUnderTest.GetClientByIdAsync(clientID);
            //Assert           

            Assert.Equal(clientID, client.Id);




        }
    }
}
