<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * CommandeLigne
 *
 * @ORM\Table(name="commande_ligne")
 * @ORM\Entity
 */
class CommandeLigne
{
    /**
     * @var int
     *
     * @ORM\Column(name="ID", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="Reference", type="string", length=20, nullable=false)
     */
    private $reference;

    /**
     * @var int
     *
     * @ORM\Column(name="ID_Produit", type="integer", nullable=false)
     */
    private $idProduit;

    /**
     * @var int
     *
     * @ORM\Column(name="Qte", type="integer", nullable=false)
     */
    private $qte;


    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set reference.
     *
     * @param string $reference
     *
     * @return CommandeLigne
     */
    public function setReference($reference)
    {
        $this->reference = $reference;

        return $this;
    }

    /**
     * Get reference.
     *
     * @return string
     */
    public function getReference()
    {
        return $this->reference;
    }

    /**
     * Set idProduit.
     *
     * @param int $idProduit
     *
     * @return CommandeLigne
     */
    public function setIdProduit($idProduit)
    {
        $this->idProduit = $idProduit;

        return $this;
    }

    /**
     * Get idProduit.
     *
     * @return int
     */
    public function getIdProduit()
    {
        return $this->idProduit;
    }

    /**
     * Set qte.
     *
     * @param int $qte
     *
     * @return CommandeLigne
     */
    public function setQte($qte)
    {
        $this->qte = $qte;

        return $this;
    }

    /**
     * Get qte.
     *
     * @return int
     */
    public function getQte()
    {
        return $this->qte;
    }
}
