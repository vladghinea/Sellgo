using Castle.Core.Internal;
using El_Proyecte_Grande.Models;
using El_Proyecte_Grande.Repository;
using El_Proyecte_Grande.Services;
using Microsoft.EntityFrameworkCore;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace El_Proyecte_Garnde_Tests
{
    class ServiceClientTests
    {
        private ServiceClient _systemUnderTest;
        private Mock<IAppDbRepository> dbMock;


        [SetUp]
        public void SetupServiceClientTest()
        {
            dbMock = new Mock<IAppDbRepository>();
            _systemUnderTest = new ServiceClient(dbMock.Object);
            dbMock.Setup(element => element.Data.Set<Client>()).Returns(new Client()
            {
                Id = 1,
                FirstName = "John",
                LastName = "Doe",
                Email = "mo",
                PhoneNumber = client.PhoneNumber,
                CompanyId = client.CompanyId,
                Company = client.Company,
                DateOfBirth = client.DateOfBirth,
                Position = client.Position,
                Gender = client.Gender,
                Address = client.Address,
                ProfessionalApproach = client.ProfessionalApproach,
                PersonalApproach = client.PersonalApproach,
                Deals = client.Deals,
                SocialMedias = client.SocialMedias

            });
        }


        [Test]
        public async Task GetClientsListTest_ShouldReturnCutomers_WhenCutomers_Exist()
        {
            //Expected

            List<Client> expectedClients = dbMock.Object.Data.Clients.ToList();

            //Actual

            List<Client> actualClients = await _systemUnderTest.GetClientsList();


            //Assert
            Assert.That(async () => await expectedClients, async () => await actualClients);
        }
    }
}
